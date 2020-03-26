// 自定义验证规则

// 手机号验证
const telValidate = (value) => /^1[3|4|5|7|8]\d{9}$/.test(value);

export default { telValidate };
