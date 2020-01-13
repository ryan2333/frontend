import React from 'react';
import { Upload, Icon, Modal, message } from 'antd';
import PropTypes from 'prop-types'

import {reqDeleteImg} from "../../api";
import {BASE_IMG_URL} from "../../utils/constans";

/*
用于图片上传
 */
class PicturesWall extends React.Component {

  static propTypes = {
    imgs: PropTypes.array
  }

  constructor(props) {
    super(props)
    let fileList = []

    // 如果传入了imgs属性
    const {imgs} = this.props
    if (imgs && imgs.length > 0) {
      fileList = imgs.map((img, index) => ({
        uid: -index,
        name: img,
        status: "done",
        url: BASE_IMG_URL + img
      }))
    }

    this.state = {
      previewVisible: false, // 标识是否显示大图预览
      previewImage: '',  // 大图的url
      fileList  // 所有已上传图片的数组
    }
  }

  getImgs = () => {
    return this.state.fileList.map(file => file.name)
  }

  // 隐藏modal
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    // 显示指定file对应的大图
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  /*
  file: 当前操作的图片文件(上传/删除)
  filelist所有已上传图片对象的数组
   */
  handleChange = async ({ file, fileList }) => {
    // 上传成功，将当前上传的file的信息修正(url, name)
    if (file.status === "done") {
      const result = file.response
      if (result.status === 0) {
        message.success('upload success')
        const {name, url} = result.data
        file = fileList[fileList.length-1]
        file.name = name
        file.url = url
      } else {
        message.error('upload failed')
      }
    } else if (file.status === "removed") { // 删除图片
      const result = await reqDeleteImg(file.name)
      if (result.status === 0) {
        message.success('image delete succ')
      } else {
        message.error('image delete error')
      }
    }

    // 在操作过程中(上传/删除)过程中更新filelist状态
    this.setState({ fileList })
  };

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div>
          <Upload
              action="/manage/img/upload" // 上传图片的接口地址
              accept='image/*' /* 只接收图片格式*/
              listType="picture-card"
              name="image" // 请求参数名
              fileList={fileList} // 指定所有已上传图片对象列表
              onPreview={this.handlePreview}
              onChange={this.handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
    );
  }
}
export default PicturesWall;