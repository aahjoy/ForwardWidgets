// trakt组件
WidgetMetadata = {
    id: "Trakt",
    title: "Trakt我看&Trakt个性化推荐",
    modules: [
        {
            title: "trakt我看",
            requiresWebView: false,
            functionName: "loadInterestItems",
            params: [
                {
                    name: "user_name",
                    title: "Tsungyiu",
                    type: "input",
                    description: "需在Trakt设置里打开隐私开关，未填写情况下接口不可用",
                },
                {
                    name: "status",
                    title: "状态",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "想看",
                            value: "watchlist",
                        },
                        {
                            title: "在看",
                            value: "progress",
                        },
                        {
                            title: "看过-电影",
                            value: "history/movies/added/asc",
                        },
                        {
                            title: "看过-电视",
                            value: "history/shows/added/asc",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                },
            ],
        },
        {
            title: "Trakt个性化推荐",
            requiresWebView: false,
            functionName: "loadSuggestionItems",
            params: [
                {
                    name: "cookie",
                    title: "traktsession=SnVUUGKp79gtk7Dbhra7ieLw%2B26kZugAtHOvmUimiuv%2BdO332KkM5VS%2BPdRsuSJy6SuCFYF9YzmP3X%2BmZJAmUdtSowZftFsatktTu8NM%2BhqKyl3GaV68eXsAs0jVlKqh68txvL0Bb6IphFWCcILhpKxWX11IMmSwCJD6SwVErWsWAT3wAdciU8QVHzw2%2Fja1nTRLP6uekTSddjVZzfsmDg81sJQwnqVNkFLLAXcNxsdESHbht27X17Yr6FpmNEI8sA8N8%2BgkdHeQnsSv6T49KdG1KSh0QtRK%2BU3HmSt2KUzleTpJrfwchbNvKGa55s36ATSujFEqGo0VK1kS1oCMfu63iCnVNvg6ZSRfivuIVyrRuiowc0dkvw%2FHgZsmPpqNr41K6RSbxgcnbhG71J73vnJyzPU3tQKfVhbwMd99RQHvGwV8k0HyDX6UyNLtrw16ZUbjn%2FEKeisDqbgJQLM3C7L8UHDa8s83NSwRZDWCM7P0I6hzg7aUdL8pVP0wIjbSrmDTY%2B7cDzZhTy7GIlHRqWQ%3D--tIv1TSaC1plW2%2BUW--5%2Fh%2FiwiKRjNUBzvlvnzRkw%3D%3D; path=/; HttpOnly; SameSite=Lax",
                    type: "input",
                    description: "_traktsession=xxxx，未填写情况下接口不可用；可登陆网页后，通过loon，Qx等软件抓包获取Cookie",
                },
                {
                    name: "type",
                    title: "类型",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "电影",
                            value: "movies",
                        },
                        {
                            title: "电视",
                            value: "shows",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                },
            ],
        },
        {
            title: "Trakt片单",
            requiresWebView: false,
            functionName: "loadListItems",
            params: [
                {
                    name: "user_name",
                    title: "Tsungyiu",
                    type: "input",
                    description: "如：giladg，未填写情况下接口不可用",
                },
                {
                    name: "list_name",
                    title: "片单列表名",
                    type: "input",
                    description: "如：latest-4k-releases，未填写情况下接口不可用",
                },
                {
                    name: "sort_by",
                    title: "排序依据",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "排名算法",
                            value: "rank",
                        },
                        {
                            title: "添加时间",
                            value: "added",
                        },
                        {
                            title: "标题",
                            value: "title",
                        },
                        {
                            title: "发布日期",
                            value: "released",
                        },
                        {
                            title: "内容时长",
                            value: "runtime",
                        },
                        {
                            title: "流行度",
                            value: "popularity",
                        },
                        {
                            title: "随机",
                            value: "random",
                        },
                    ],
                },
                {
                    name: "sort_how",
                    title: "排序方向",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "正序",
                            value: "asc",
                        },
                        {
                            title: "反序",
                            value: "desc",
                        },
                    ],
                },
                {
                    name: "page",
                    title: "页码",
                    type: "page"
                },
            ],
        },
        {
            title: "Trakt追剧日历",
            requiresWebView: false,
            functionName: "loadCalendarItems",
            params: [
                {
                    name: "cookie",
                    title: "用户Cookie",
                    type: "input",
                    description: "_traktsession=xxxx，未填写情况下接口不可用；可登陆网页后，通过loon，Qx等软件抓包获取Cookie",
                },
                {
                    name: "start_date",
                    title: "开始日期：n天前（0表示今天，-1表示昨天，1表示明天）",
                    type: "input",
                    description: "0表示今天，-1表示昨天，1表示明天，未填写情况下接口不可用",
                },
                {
                    name: "days",
                    title: "天数",
                    type: "input",
                    description: "如：7，会返回从开始日期起的7天内的节目，未填写情况下接口不可用",
                },
                {
                    name: "order",
                    title: "排序方式",
                    type: "enumeration",
                    enumOptions: [
                        {
                            title: "日期升序",
                            value: "asc",
                        },
                        {
                            title: "日期降序",
                            value: "desc",
                        },
                    ],
                },
            ],
        },
    ],
    version: "1.0.9",
    requiredVersion: "0.0.1",
    description: "解析Trakt想看、在看、已看、片单、追剧日历以及根据个人数据生成的个性化推荐【五折码：CHEAP.5;七折码：CHEAP】",
    author: "huangxd",
    site: "https://github.com/huangxd-/ForwardWidgets"
};

function extractTraktUrlsFromResponse(responseData, minNum, maxNum) {
    let docId = Widget.dom.parse(responseData);
    let metaElements = Widget.dom.select(docId, 'meta[content^="https://trakt.tv/"]');
    if (!metaElements || metaElements.length === 0) {
        throw new Error("未找到任何 meta content 链接");
    }

    let traktUrls = Array.from(new Set(metaElements
        .map(el => el.getAttribute?.('content') || Widget.dom.attr(el, 'content'))
        .filter(Boolean)))
        .slice(minNum - 1, maxNum);
    return traktUrls;
}

function extractTraktUrlsInProgress(responseData, minNum, maxNum) {
    let docId = Widget.dom.parse(responseData);
    let mainInfoElements = Widget.dom.select(docId, 'div.col-md-15.col-sm-8.main-info');

    if (!mainInfoElements || mainInfoElements.length === 0) {
        throw new Error("未找到任何 main-info 元素");
    }

    let traktUrls = [];
    mainInfoElements.slice(minNum - 1, maxNum).forEach(element => {
        // 提取 href 值
        let linkElement = Widget.dom.select(element, 'a[href^="/shows/"]')[0];
        if (!linkElement) return;

        let href = linkElement.getAttribute?.('href') || Widget.dom.attr(linkElement, 'href');
        if (!href) return;

        // 提取 progress 值
        let progressElement = Widget.dom.select(element, 'div.progress.ticks')[0];
        let progressValue = progressElement
            ? parseInt(progressElement.getAttribute?.('aria-valuenow') || Widget.dom.attr(progressElement, 'aria-valuenow') || '0')
            : 0;

        // 如果 progress 不是 100，添加 URL
        if (progressValue !== 100) {
            let fullUrl = `https://trakt.tv${href}`;
            traktUrls.push(fullUrl);
        }
    });

    return Array.from(new Set(traktUrls));
}

async function fetchImdbIdsFromTraktUrls(traktUrls) {
    let imdbIdPromises = traktUrls.map(async (url) => {
        try {
            let detailResponse = await Widget.http.get(url, {
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "Cache-Control": "no-cache, no-store, must-revalidate",
                    "Pragma": "no-cache",
                    "Expires": "0",
                },
            });

            let detailDoc = Widget.dom.parse(detailResponse.data);
            let imdbLinkEl = Widget.dom.select(detailDoc, 'a#external-link-imdb')[0];

            if (!imdbLinkEl) return null;

            let href = Widget.dom.attr(imdbLinkEl, 'href');
            let match = href.match(/title\/(tt\d+)/);

            return match ? `${match[1]}` : null;
        } catch {
            return null; // 忽略单个失败请求
        }
    });

    let imdbIds = (await Promise.all(imdbIdPromises)).filter(Boolean).map((item) => ({
        id: item,
        type: "imdb",
    }));
    console.log("请求imdbIds:", imdbIds)
    return imdbIds;
}

async function fetchTraktData(url, headers = {}, status, minNum, maxNum, order = "") {
    try {
        const response = await Widget.http.get(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0",
                ...headers, // 允许附加额外的头
            },
        });

        console.log("请求结果:", response.data);

        let traktUrls = [];
        if (status === "progress") {
            traktUrls = extractTraktUrlsInProgress(response.data, minNum, maxNum);
        } else {
            traktUrls = extractTraktUrlsFromResponse(response.data, minNum, maxNum);
        }

        if (order === "desc") {
            traktUrls = traktUrls.reverse();
        }

        return await fetchImdbIdsFromTraktUrls(traktUrls);
    } catch (error) {
        console.error("处理失败:", error);
        throw error;
    }
}

async function loadInterestItems(params = {}) {
    try {
        const page = params.page;
        const userName = params.user_name || "";
        const status = params.status || "";
        const count = 20
        const size = status === "watchlist" ? 6 : 3
        const minNum = ((page - 1) % size) * count + 1
        const maxNum = ((page - 1) % size) * count + 20
        const traktPage = Math.floor((page - 1) / size) + 1

        if (!userName) {
            throw new Error("必须提供 Trakt 用户名");
        }

        let url = `https://trakt.tv/users/${userName}/${status}?page=${traktPage}`;
        return await fetchTraktData(url, {}, status, minNum, maxNum);
    } catch (error) {
        console.error("处理失败:", error);
        throw error;
    }
}

async function loadSuggestionItems(params = {}) {
    try {
        const page = params.page;
        const cookie = params.cookie || "";
        const type = params.type || "";
        const count = 20;
        const minNum = (page - 1) * count + 1
        const maxNum = (page) * count

        if (!cookie) {
            throw new Error("必须提供用户Cookie");
        }

        let url = `https://trakt.tv/${type}/recommendations`;
        return await fetchTraktData(url, {Cookie: cookie}, "", minNum, maxNum);
    } catch (error) {
        console.error("处理失败:", error);
        throw error;
    }
}

async function loadListItems(params = {}) {
    try {
        const page = params.page;
        const userName = params.user_name || "";
        const listName = params.list_name || "";
        const sortBy = params.sort_by || "";
        const sortHow = params.sort_how || "";
        const count = 20
        const minNum = ((page - 1) % 6) * count + 1
        const maxNum = ((page - 1) % 6) * count + 20
        const traktPage = Math.floor((page - 1) / 6) + 1

        if (!userName || !listName) {
            throw new Error("必须提供 Trakt 用户名 和 片单列表名");
        }

        let url = `https://trakt.tv/users/${userName}/lists/${listName}?page=${traktPage}&sort=${sortBy},${sortHow}`;
        return await fetchTraktData(url, {}, "", minNum, maxNum);
    } catch (error) {
        console.error("处理失败:", error);
        throw error;
    }
}

async function loadCalendarItems(params = {}) {
    try {
        const cookie = params.cookie || "";
        const startDateInput = params.start_date || "";
        const days = params.days || "";
        const order = params.order || "";

        if (!cookie || !startDateInput || !days || !order) {
            throw new Error("必须提供用户Cookie、开始日期、天数及排序方式");
        }

        const startDateOffset = parseInt(startDateInput, 10);
        if (isNaN(startDateOffset)) {
            throw new Error("开始日期必须是有效的数字");
        }

        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() + startDateOffset);

        // Format date as YYYY-MM-DD
        const formattedStartDate = startDate.toISOString().split('T')[0];

        let url = `https://trakt.tv/calendars/my/shows-movies/${formattedStartDate}/${days}`;
        return await fetchTraktData(url, {Cookie: cookie}, "", 1, 100, order);
    } catch (error) {
        console.error("处理失败:", error);
        throw error;
    }
}
