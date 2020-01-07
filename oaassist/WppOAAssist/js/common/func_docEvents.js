//切换窗口时触发的事件
function OnWindowActivate() {
    console.log("OnWindowActivate" + "=======================");

    showOATab(); // 根据文件是否为OA文件来显示OA菜单再进行刷新按钮
    setTimeout(activeTab, 500); // 激活页面必须要页签显示出来，所以做1秒延迟
    return;
}

function OnPresentationBeforeClose(doc) {
    console.log('OnPresentationClose');

    var l_fullName = doc.FullName;
    var l_bIsOADoc = false;
    l_bIsOADoc = CheckIfDocIsOADoc(doc); //判断是否OA文档要关闭
    if (l_bIsOADoc == false) { // 非OA文档不做处理
        return;
    }

    if (doc.Saved == false) { //如果OA文档关闭前，有未保存的数据
        if (wps.confirm("系统文件有改动，是否提交后关闭？" + "\n" + "确认后请按上传按钮执行上传操作。取消则继续关闭文档。")) {
            wps.ApiEvent.Cancel = true;
            return;
        }
    }

    wps.ApiEvent.RemoveApiEventListener("PresentationBeforeClose", OnPresentationBeforeClose);
    doc.Close();
    wps.ApiEvent.AddApiEventListener("PresentationBeforeClose", OnPresentationBeforeClose);
    pSetNoneOADocFlag(l_fullName);
    closeWppIfNoDocument(); // 判断文件个数是否为0，若为0则关闭组件
    wps.FileSystem.Remove(l_fullName);
}

/**
 * 作用：判断当前文档是否从OA来的文档，如果非OA文档（就是本地新建或打开的文档，则设置EnumOAFlag 标识）
 * 作用：设置非OA文档的标识状态
 * @param {*} doc 
 * 返回值：无
 */
function pSetNoneOADocFlag(fullName) {

    var l_param = wps.PluginStorage.getItem(fullName); //定义JSON文档参数
    var l_objParams = new Object();
    if (l_param) {
        l_objParams = JSON.parse(l_param);
    }
    l_objParams.isOA = EnumOAFlag.DocFromNoOA; // 新增非OA打开文档属性
    wps.PluginStorage.setItem(fullName, JSON.stringify(l_objParams)); // 存入内存中
}