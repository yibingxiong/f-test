const Strategies = {
    isNotEmpty: function (value, errorMsg) {
        if (value == null || value === '') {
            return errorMsg;
        }
    },
    minLength: function(value, len, errorMsg) {
        if (value == null || value.length < len) {
            return errorMsg;
        }
    }
}


function validate() {
    let v1 = '哈哈哈';
    let v2 = '';
    console.log(Strategies.isNotEmpty(v1, 'v1不能为空'));
    console.log(Strategies.minLength(v1, 4, 'v1至少4个字'));
    console.log(Strategies.isNotEmpty(v2, 'v2不能为空'))
}

validate();