'use strict';
var fs = require('fs'),
    filePath = process.argv[2], // absolute path of the file given
    cnt = fs.readFileSync(filePath, 'utf-8').split('\n').filter(String); //.slice(1);
var Int64 = require('node-int64')
var BigNumber = require('bignumber.js');
function Arraymanup(arr1) {
    var ar2 = [0, arr1[0]];
    for (var i = 2; i < arr1.length + 1; i++) {
        ar2.push(ar2[i - 1] + arr1[i - 1]);
    }
    return (ar2)
}

function itern(ar2) {
    var sol = {},
        cha = ar2.length > 1000? 8000000 : 1,
        count=0;
    for (var i = 0; i < ar2.length; i++) {
        for (var j = ar2.length-1; j > i + 1; j--) {
            sol[ar2[j] - ar2[i]] = sol[ar2[j] - ar2[i]] ? sol[ar2[j] - ar2[i]] + 1 : 1;
            count++;
            j=ar2[j] - ar2[i]<cha?i+1:j;
        }
    }
    var final_sent = Object.entries(sol).reverse()
    // console.log((ar2.length * (ar2.length - 1) / 2 ) -count);
    return final_sent
}

function itern2(max_no, ar2, org_max) {
    var sol = 0,
        cha = false;

    for (var i in ar2) {
        // console.log(`${(parseInt(i) + parseInt(max_no))} ${i*1+max_no*1}`);
        sol += ar2[i * 1 + max_no * 1] !== undefined ? 1 : 0;
        if (i * 1 + max_no * 1 > org_max)
            break;

    }
    return sol
}

function retobj(obj_1, min_val, max_val, org_max, num_arr, arr1) {
    var min_arr = {
            0: 0
        },
        max_arr = {},
        index = 0,
        targetvalue = (num_arr * (num_arr - 1) / 2) - max_val;
    max_arr[org_max + 1] = 0;
    // console.log(` ${min_val}   ${(num_arr*(num_arr-1)/2)-max_val} ${(num_arr*(num_arr-1)/2)}  `);
    for (var k = 1; index < min_val; k += 1) {
        min_arr[k] = itern2(k, obj_1, org_max);
        index += min_arr[k]
    }
    return ([min_arr, itern(arr1)]);

}

function revsum(arrlength, params, min_value, max_value) {
    var totallength = arrlength * (arrlength - 1) / 2,
        min_params = params[0],
        max_params = params[1];
    var sum1 = 0,
        sum2 = 0,
        index = 0,
        meanvalue = totallength - max_value;
    for (var i = 0; index <= meanvalue && i < max_params.length; i++) {
        sum1 += (meanvalue - index) >= max_params[i][1] ? max_params[i][1] * max_params[i][0] : (meanvalue - index) * max_params[i][0];
        index += (meanvalue - index) >= max_params[i][1] ? max_params[i][1] : (meanvalue - index)
        // back
    }
    index = 0;
    meanvalue = min_value;
    // forward
    for (var i in min_params) {
        sum2 += meanvalue - index > min_params[i]? min_params[i] * i : (meanvalue - index-1) * i;
        index += meanvalue - index > min_params[i] ? min_params[i] : meanvalue - index;
        if (index - meanvalue == 0) break;

    }
    // console.log(`${total}  ${sum2} ${sum1}`);
     return sum2+sum1

}

function totalsum(arr,sub_fac) {
    var total = new Int64('0');
    total-=sub_fac
    var n = arr.length;
    for (var i = 1; i <= n; i++) {
        total += (n - 1 - 2 * (i - 1)) * arr[n - i]
    }
    return total;

}


// console.time('someFunction');
for (var i = 0, j = 1; i < parseInt(cnt[0]); i++, j += parseInt(cnt[j].split(" ")[1]) + 2) { //
    var Ary_1 = Arraymanup(cnt[j + 1].split(" ").map(Number))
    var obj_1 = Ary_1.reduce(function(acc, cur, i) {
        acc[cur] = cur;
        return acc;
    }, {});
    var first_index = [],
        last_index = []

    for (var k = j; k < j + parseInt(cnt[j].split(" ")[1]); k++) {
        first_index.push(cnt[k + 2].split(" ")[0]);
        last_index.push(cnt[k + 2].split(" ")[1]);
             // console.log(cnt[k+2]);
    }

    console.log(`Case #${i+1}:`)
    // console.log( Ary_1[Ary_1.length - 1]);
    var parameters = (retobj(obj_1, Math.max(...first_index), Math.min(...last_index), Ary_1[Ary_1.length - 1], Ary_1.length, Ary_1))
    
    for (var k = 0; k < first_index.length; k++) {
        console.log(totalsum(Ary_1,revsum(Ary_1.length, parameters, first_index[k ], last_index[k ])));

    }


}
// console.timeEnd('someFunction');