'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath, 'utf-8').split('\n').filter(String); //.slice(1);
function generate_string(s1, s2, n, a, b, c, d) {
    var x = [s1.charCodeAt(), s2.charCodeAt()],
        s = [s1, s2];
    for (var i = 2; i < n; i++) {
        x[i] = (a * x[i - 1] + b * x[i - 2] + c) % d;
        s[i] = String.fromCharCode(97 + x[i] % 26)
    }
    // console.log(x.reverse());
    return s.join("");
}

function generate(strings) {
    var temp_string_sort = { length: strings.length - 1, last_line: strings[strings.length - 1], full: strings ,first:  strings[0]};
    for (var j = 0, length1 = strings.length; j < length1; j++) {
        temp_string_sort[strings[j]] = temp_string_sort[strings[j]] ? (temp_string_sort[strings[j]] + 1) : 1;
    }
    return temp_string_sort
}

function sub_char_dec(string1) {
    var chars_inc = {},
        mot_string = [];
    for (var i = 0; i < string1.length; i++) {
        chars_inc[string1[i]] = chars_inc[string1[i]] ? chars_inc[string1[i]] + 1 : 1;
        chars_inc['length'] = i;
        chars_inc['letter'] = string1[i];
        mot_string.push(JSON.parse(JSON.stringify(chars_inc)));
    }
    return mot_string;
}

function check_string(arr_obj, check_arry,genstring) {

    for (var index = 0; index < arr_obj.length; index++) {
        if (arr_obj[index + check_arry.length] == undefined) return 0;
        else if(check_arry.first!==arr_obj[index].letter) continue;
        else if (check_arry.last_line == arr_obj[index + check_arry.length].letter) {
            var tempobj = 0;
            for (var j in arr_obj[index + check_arry.length])
                tempobj += (j != arr_obj[index].letter && (arr_obj[index + check_arry.length][j] )&&(arr_obj[index][j] &&check_arry[j])) ? ((arr_obj[index + check_arry.length][j]||0 ) - (arr_obj[index][j] ||0 ) - check_arry[j] ||0) : 0;
             // if(tempobj==0)console.log(genstring.substring(index,index + check_arry.length+1));
            return tempobj == 0 ? 1 : 0
        }
    }
    return 0;
}

function check_found(arr_obj, list_string,genstring) {
    var times_found = 0,
        temp = 0,
        strings = list_string.split(" ");
    for (var i = 0; i < strings.length; i++) {
        times_found+=check_string(arr_obj, generate(strings[i]),genstring)
    }
    return (times_found);
}



for (var i = 1, j = 1; i < 3 * parseInt(cnt[0]); i += 3, j++) {
    var param = cnt[i + 2].split(" ");
    var gen_string = generate_string(param[0], param[1], parseInt(param[2]), parseInt(param[3]), parseInt(param[4]), parseInt(param[5]), parseInt(param[6]))
    var gen_string_list = sub_char_dec(gen_string);
    console.log(`Case #${j}: ${check_found(gen_string_list, cnt[i+1],gen_string)}`);
    // console.log(cnt[i]);

}