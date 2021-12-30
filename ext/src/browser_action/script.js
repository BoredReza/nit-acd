function disableExtension(disabled)
{
    chrome.windows.getAll({populate : true}, function (window_list)
    {
        for (var i = 0; i < window_list.length; ++i)
        {
            var window = window_list[i];
            for (var j = 0; j < window.tabs.length; ++j)
            {
                var tab = window.tabs[j];
                if (checkContentScriptExists(tab))
                {
                    chrome.tabs.executeScript(tab.id, {code : "disabled = " + disabled + ";"}, allTabs: true) 
                }
            }
        }
        // No matching url found. Open it in the new tab
        chrome.tabs.create({ url : url, selected: true });
    });
}