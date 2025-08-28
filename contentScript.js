document.addEventListener('keydown', function(event) {
    if (event.key === 'F5' || (event.ctrlKey && event.key === 'r')) {
        console.log('=====F5==========')
        chrome.runtime.sendMessage({ action: "reloadTabs" });
    }
});
if (current_url = window.location.href, current_url.includes('2ndstreet.jp/finish')) {
    // setTimeout(() => {
    //     window.location.href = "https://www.2ndstreet.jp/cart";
    // }, 1000);
}
if(current_url=window.location.href, "https://www.2ndstreet.jp/delivery"==current_url)
{
    console.log("=====current_url========", current_url)
    function selectLuecaPayment() {
        let luecaRadio = document.getElementById("payment_choose_member3");
        if (luecaRadio) {
            luecaRadio.checked = true;
            luecaRadio.dispatchEvent(new Event('change'));
        }
    }
    function selectBirthday() {
        let yearSelect = document.querySelector('select[name="birthdayYear"]');
        if (yearSelect) {
            selectLuecaPayment();
            yearSelect.value = "1993";
            yearSelect.dispatchEvent(new Event('change'));
        }

        // Select the month (August)
        let monthSelect = document.querySelector('select[name="birthdayMonth"]');
        if (monthSelect) {
            monthSelect.value = "11";
            monthSelect.dispatchEvent(new Event('change'));
        }

        // Select the day (14)
        let daySelect = document.querySelector('select[name="birthdayDay"]');
        if (daySelect) {
            daySelect.value = "18";
            daySelect.dispatchEvent(new Event('change'));
        }
    }
    function selectJob() {
        let jobSelect = document.querySelector('select[name="jobCode"]');
        if (jobSelect) {
            jobSelect.value = "1";
            jobSelect.dispatchEvent(new Event('change'));
        }
    }
    function checkAndClickButton() {
        let submitBtn = document.getElementById("submit-btn");
        if (submitBtn !== null) {
            window.stop();
            selectBirthday();
            selectJob();
            submitBtn.click();
        } else {
            setTimeout(checkAndClickButton, 1);
        }
    }
    checkAndClickButton()
}

if(current_url=window.location.href, current_url.includes('2ndstreet.jp/delivery'))
{
    console.log("=====current_url========", current_url)
    function selectLuecaPayment() {
        let luecaRadio = document.getElementById("payment_choose_member3");
        if (luecaRadio) {
            luecaRadio.checked = true;
            luecaRadio.dispatchEvent(new Event('change'));
        }
    }
    function selectBirthday() {
        let yearSelect = document.querySelector('select[name="birthdayYear"]');
        if (yearSelect) {
            selectLuecaPayment();
            yearSelect.value = "1993";
            yearSelect.dispatchEvent(new Event('change'));
        }

        // Select the month (August)
        let monthSelect = document.querySelector('select[name="birthdayMonth"]');
        if (monthSelect) {
            monthSelect.value = "11";
            monthSelect.dispatchEvent(new Event('change'));
        }

        // Select the day (14)
        let daySelect = document.querySelector('select[name="birthdayDay"]');
        if (daySelect) {
            daySelect.value = "18";
            daySelect.dispatchEvent(new Event('change'));
        }
    }
    function selectJob() {
        let jobSelect = document.querySelector('select[name="jobCode"]');
        if (jobSelect) {
            jobSelect.value = "2";
            jobSelect.dispatchEvent(new Event('change'));
        }
    }
    function checkAndClickButton() {
        let submitBtn = document.getElementById("submit-btn");
        if (submitBtn !== null) {
            window.stop();
            selectBirthday();
            selectJob();
            submitBtn.click();
        }
        let agreeBtn = document.getElementById("agree_omit");
        if (agreeBtn !== null) {
            window.stop();
            agreeBtn.click();
        }
        let payBtn = document.getElementById("order_submit");
        let purchase = document.getElementById("purchase");
        let element = document.querySelector(".m-btn.-right.mostImportant");
        if (payBtn !== null)
            payBtn.click();
        else if (purchase !== null)
            purchase.click();
        else if (element !== null)
            element.click();
        else {
            setTimeout(checkAndClickButton, 1);
        }
    }
    checkAndClickButton()
}
function addCart()
{
    if(void 0!==document.querySelector(".addCartWideBtn")&&null!=document.querySelector(".addCartWideBtn"))
    {
        var parent=document.querySelector(".addCartWideBtn");
        parent.click(),
        window.addEventListener("load",(function(){parent.click(),window.location.href="/delivery"}))
    }
}

function check_paymentType()
{
    void 0!==document.getElementById("payment_choose_member1")&&null!=document.getElementById("payment_choose_member1")&&document.getElementById("payment_choose_member1").click()
}

var previousHref = sessionStorage.getItem('previousHref') || '';
var beepSound = new Audio('https://www.soundjay.com/button/button-1.wav'); // オンラインのビープ音ファイルのURLを指定

window.addEventListener("DOMContentLoaded",(
    function(){
        if(current_url=window.location.href, current_url.includes('2ndstreet.jp/cart'))
        {
            window.stop();
        }
        else if (current_url.includes("https://www.2ndstreet.jp/index.php/api_2_0"))
        {
            window.stop();
            console.log("===", current_url);
            // Get the <pre> element by its tag name
            const preElement = document.querySelector('pre');

            // Check if the <pre> element exists
            if (preElement) {
                // Get the inner HTML content of the <pre> element
                let innerHTMLContent = preElement.innerHTML;
                
                // Log or use the inner HTML content as needed
                // console.log(innerHTMLContent);
                // Parse the JSON data string into an object
                const data = JSON.parse(innerHTMLContent);

                // Extract goods_id and shops_id from each object in the value array
                const goodsData = data.value.map(item => {
                return {
                    goods_id: item.goods_id,
                    shops_id: item.shops_id,
                    brand_name: item.brand_name,
                    // price: new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(item.price),
                    price: item.price,
                    image_url: item.image_url,
                    goods_name: item.goods_name,
                    size_detail: item.size_detail == null ? '' : item.size_detail,
                    stock_count: item.stock_count,
                };
                });
                const filteredGoodsData = goodsData.filter(item => item.price < 50000);

                // Replace the inner HTML content of an element with id "goodsTitle"
                innerHTMLContent = `
                <head>
                <link rel="stylesheet" href="https://cdn2.2ndstreet.jp/v3/cmn/css/reset.css">
                <link rel="stylesheet" href="https://cdn2.2ndstreet.jp/v3/cmn/css/cmn.css">
                <link href="https://cdn2.2ndstreet.jp/v3/pc/css/itemCard.css" media="" rel="stylesheet" type="text/css">
                <link href="https://cdn2.2ndstreet.jp/v3/pc/css/search/top.css" media="" rel="stylesheet" type="text/css">
                </head>
                <div style="display: flex;">
                    <section id="ecResultleft" style="width: 10%;">
                    </section>
                    <section id="ecResult" class="contentBox" style="width: 80%;">
                        <div id="searchResultSubs"  style="margin-top:30px;">
                            <div id="ecResultNum"><p>検索結果：<span>${filteredGoodsData.length}</span>点</p></div>
                            <div id="searchOrder" class="searchDropdown" style="margin-right: 140px;">
                                <label id="searchOrderByLabel" class="dropArrow" for="searchOrderBy">
                                    <span>
                                        新着順
                                    </span>
                                </label>
                            </div>
                        </div>

                        <div id="searchResultListWrapper">
                            <ul class="itemCardList -wrap">`;
                        
                        const htmlContent = filteredGoodsData.map(item => `
                            <li class="js-favorite itemCard" goodsid="${item.goods_id}" favorite="0">
                                <a href="/goods/detail/goodsId/${item.goods_id}/shopsId/${item.shops_id}" class="itemCard_inner">
                                <div class="itemCard_img">
                                    <img src="${item.image_url}" loading="lazy" decoding="async" width="185" height="246.663">
                                    <ul class="itemCard_labelList">
                                        <li class="itemCard_label -new">NEW</li>                                                                                                
                                    </ul>
                                </div>
                                <div class="itemCard_body">
                                    <p class="itemCard_brand">${item.brand_name}</p>
                                    <p class="itemCard_name">${item.goods_name}</p>
                                    <p class="itemCard_status">商品の状態 : ${item.size_detail}</p>
                                    <p class="itemCard_price  itemCard_price">${new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(item.price)}</p>
                                </div>
                                </a><a class="favorite itemCard_favorite noLoginFavGoodsSave"></a>
                            </li>
                        `).join('');

                innerHTMLContent += htmlContent;
                innerHTMLContent += `
                            </ul>
                        </div>
                        <nav class="ecPager">
                        <div style="height:50px;"></div>
                        </nav>
                    </section>
                    <section id="ecResultleft" style="width: 10%;">
                    </section>
                </div>`;

            // Set the new inner HTML content to the <pre> element
            const bodyElement = document.body;
            bodyElement.innerHTML = innerHTMLContent;

            document.addEventListener('click', function(event) {
                event.preventDefault();
                if (event.target.tagName === 'IMG' || event.target.classList.contains('itemCard_brand') || event.target.classList.contains('itemCard_status') || event.target.classList.contains('itemCard_name') || event.target.classList.contains('itemCard_price')) {
                    var itemCardInner = event.target.closest('.itemCard_inner');
                    if (itemCardInner) {
                        console.log(itemCardInner.href);

                        // Split the URL by '/'
                        var parts = itemCardInner.href.split('/');

                        // Find the index of 'goodsId' and 'shopsId'
                        var goodsIdIndex = parts.indexOf('goodsId');
                        var shopsIdIndex = parts.indexOf('shopsId');

                        // Extract the values
                        var goodsId = parts[goodsIdIndex + 1];
                        var shopsId = parts[shopsIdIndex + 1];

                        console.log("goodsid: " + goodsId);
                        console.log("shopsid: " + shopsId);

                        // Create a new XMLHttpRequest object
                        var xhr = new XMLHttpRequest();

                        // Define the request details
                        var request = {
                            method: 'POST',
                            url: 'https://www.2ndstreet.jp/cart/updateAjax',
                            httpVersion: 'http/2.0',
                            headers: [
                                {
                                    "name": "accept",
                                    "value": "*/*"
                                },
                                {
                                    "name": "accept-language",
                                    "value": "ja,en-US;q=0.9,en;q=0.8,ko;q=0.7"
                                },
                                {
                                    "name": "content-type",
                                    "value": "application/x-www-form-urlencoded; charset=UTF-8"
                                },
                                {
                                    "name": "x-requested-with",
                                    "value": "XMLHttpRequest"
                                }
                            ],
                            headersSize: -1,
                            bodySize: 41,
                            postData: {
                                mimeType: 'application/x-www-form-urlencoded; charset=UTF-8',
                                text: 'goodsId='+goodsId+'&shopsId='+shopsId+'&num=1',
                                params: [
                                    {
                                        name: 'goodsId',
                                        value: goodsId
                                    },
                                    {
                                        name: 'shopsId',
                                        value: shopsId
                                    },
                                    {
                                        name: 'num',
                                        value: '1'
                                    }
                                ]
                            }
                        };

                        // Open a POST request to the API endpoint
                        xhr.open(request.method, request.url, false);

                        // Set the Content-Type header for POST requests
                        xhr.setRequestHeader('Content-type', request.postData.mimeType);
                        request.headers.forEach(function(header) {
                            xhr.setRequestHeader(header.name, header.value);
                        });
                        // Send the POST request with the parameters
                        xhr.send(request.postData.text);

                        // Log the response from the API
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                console.log(xhr.responseText);
                            }
                        };
                        setTimeout(function() {
                            // window.location.href = "https://www.2ndstreet.jp/delivery";
                            window.open("https://www.2ndstreet.jp/delivery", '_blank', 'noopener,noreferrer,resizable')
                            // var newWindow = window.open("https://www.2ndstreet.jp/delivery", '_blank', 'noopener,noreferrer,resizable');
                            // if (newWindow) {
                            //     newWindow.opener = null; // Prevent the new page from accessing the opener
                            // }
                        }, 10);
                    }
                }
            });

            } else {
                console.log('Error: <pre> element not found.');
            }
        }
        else if (current_url.includes("https://www.2ndstreet.jp/search"))
        {
            document.addEventListener('click', function(event) {
                event.preventDefault();
                if (event.target.tagName === 'IMG' || event.target.classList.contains('itemCard_brand') || event.target.classList.contains('itemCard_status') || event.target.classList.contains('itemCard_name') || event.target.classList.contains('itemCard_price')) {
                    var itemCardInner = event.target.closest('.itemCard_inner');
                    if (itemCardInner) {
                        console.log(itemCardInner.href);

                        // Split the URL by '/'
                        var parts = itemCardInner.href.split('/');

                        // Find the index of 'goodsId' and 'shopsId'
                        var goodsIdIndex = parts.indexOf('goodsId');
                        var shopsIdIndex = parts.indexOf('shopsId');

                        // Extract the values
                        var goodsId = parts[goodsIdIndex + 1];
                        var shopsId = parts[shopsIdIndex + 1];

                        console.log("goodsid: " + goodsId);
                        console.log("shopsid: " + shopsId);

                        // Create a new XMLHttpRequest object
                        var xhr = new XMLHttpRequest();

                        // Define the request details
                        var request = {
                            method: 'POST',
                            url: 'https://www.2ndstreet.jp/cart/updateAjax',
                            httpVersion: 'http/2.0',
                            headers: [
                                {
                                    "name": "accept",
                                    "value": "*/*"
                                },
                                {
                                    "name": "accept-language",
                                    "value": "ja,en-US;q=0.9,en;q=0.8,ko;q=0.7"
                                },
                                {
                                    "name": "content-type",
                                    "value": "application/x-www-form-urlencoded; charset=UTF-8"
                                },
                                {
                                    "name": "x-requested-with",
                                    "value": "XMLHttpRequest"
                                }
                            ],
                            headersSize: -1,
                            bodySize: 41,
                            postData: {
                                mimeType: 'application/x-www-form-urlencoded; charset=UTF-8',
                                text: 'goodsId='+goodsId+'&shopsId='+shopsId+'&num=1',
                                params: [
                                    {
                                        name: 'goodsId',
                                        value: goodsId
                                    },
                                    {
                                        name: 'shopsId',
                                        value: shopsId
                                    },
                                    {
                                        name: 'num',
                                        value: '1'
                                    }
                                ]
                            }
                        };

                        // Open a POST request to the API endpoint
                        xhr.open(request.method, request.url, false);

                        // Set the Content-Type header for POST requests
                        xhr.setRequestHeader('Content-type', request.postData.mimeType);
                        request.headers.forEach(function(header) {
                            xhr.setRequestHeader(header.name, header.value);
                        });
                        // Send the POST request with the parameters
                        xhr.send(request.postData.text);

                        // Log the response from the API
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                console.log(xhr.responseText);
                            }
                        };

                        setTimeout(function() {
                            // window.location.href = "https://www.2ndstreet.jp/delivery";
                            window.open("https://www.2ndstreet.jp/delivery", '_blank', 'noopener,noreferrer,resizable')
                            // var newWindow = window.open("https://www.2ndstreet.jp/delivery", '_blank', 'noopener,noreferrer,resizable');
                            // if (newWindow) {
                            //     newWindow.opener = null; // Prevent the new page from accessing the opener
                            // }
                        }, 10);
                    }
                }
            });
        }
    }
));
