//表格数据
var global_tbl=[
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
    {name:"张三",studentnumber:11066049,classnumber:2,age:17,sex:1},
];

$(function () {
    init_table._init();
});

//初始化表格
var init_table={
    _init:function () {
        var totalRows=global_tbl.length;        //总行数
        var pageRows=parseInt($(".page-rows").val());     //每页行数
        var totalPage=Math.ceil(totalRows/pageRows);  //总页数
        var currentPage=parseInt($(".current-page").val());   //当前页数
        $(".total-rows").text(totalRows);                 //重新赋值总行数
        $(".total-page").text(totalPage);               //重新赋值总页数
        var startNum=(currentPage-1)*pageRows;          //起始位置
        var endNum=(currentPage-1)*pageRows+pageRows-1; //结束位置
        if(endNum>totalRows-1)endNum=totalRows-1;       //最后一页若是大于总页数，默认为总页数
        var _html="";
        console.log(startNum,endNum);
        for(var i=startNum;i<endNum+1;i++){             //循环取得当前页数据，数组中从startNum到endNum
            _html+="<tr><td>"+(i+1)+"</td>";
            $.each(global_tbl[i],function (t, tdata) {
                var val=tdata;
                if(t=="sex")tdata=tdata?"男":"女";
                _html+="<td>"+tdata+"</td>"
            });
            _html+="</tr>"
        }
        console.log(_html);
        $("#tbl-tbody").html(_html);                    //获得_html赋值给tbody
    }
};

//分页操作
var init_page_btn={
    _init_currentPage:function (_this) {
        var currentPage=parseInt($(_this).val());           //当前页数
        var totalPage=parseInt($(".total-page").val());     //总页数
        if(currentPage<1)currentPage=1;                     //当前页数不能小于1
        if(currentPage>totalPage)currentPage=totalPage;     //当前页数不能大于总页数
        $(_this).val(currentPage);                          //将调整后的当前页赋值给页面，避免输入不规范，如小数或小于0，大于总页数。
        init_table._init();                                 //初始化表格
    },
    _init_pagerow:function (_this) {
        var pageRows=parseInt($(_this).val());              //当前每页行数
        var totalRows=parseInt($(".total-rows").val());     //总行数
        var currentPage=parseInt($(".current-page").val()); //当前页
        if(pageRows<1)pageRows=1;                           //当前每页行数不能小于1
        var totalPages=Math.ceil(totalRows/pageRows);       //计算总页数
        if(currentPage>totalPages)currentPage=1;            //当前页是否大于总页数
        $(_this).val(pageRows);                             //将当前每页行数重新赋值给页面
        $(".current-page").val(currentPage);                //将当前页数重新赋值给页面
        $(".total-rows").text(totalPages);                  //将当前总页数重新赋值给页面
        init_table._init();                                 //初始化表格
    },
    _init_currentPage_number:function (type) {
        var currentPage=parseInt($(".current-page").val());  //当前页
        var totalPage=parseInt($(".total-page").text());     //总页数
        switch (type){
            case "first":
                currentPage=1;                               //首页，即第1页
                break;
            case "prev":
                currentPage=(currentPage-1)?currentPage-1:1; //上一页，小于1时默认为第1页
                break;
            case "next":
                currentPage=(currentPage+1)>totalPage?totalPage:currentPage+1;  //下一页，大于总页数时，默认为总页数
                break;
            case "last":
                currentPage=totalPage;                          //末页
                break;
            default:
                break;
        }
        console.log(currentPage);
        $(".current-page").val(currentPage);                    //重新赋值当前页
        init_table._init();                                     //初始化表格
    }
};



