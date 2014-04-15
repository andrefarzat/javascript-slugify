String.prototype.slugify = function(){
    var from = 'àáäãâèéëêìíïîòóöôõùúüûñç·/_,:;',
        to = 'aaaaaeeeeiiiiooooouuuunc------',
        i = 0,
        len = from.length,
        str = this.toLowerCase();

    for( ; i < len; i++ ){
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    return str.replace(/^\s+|\s+$/g, '') //trim
        .replace(/[^-a-zA-Z0-9\s]+/ig, '')
        .replace(/\s/gi, "-");
};
