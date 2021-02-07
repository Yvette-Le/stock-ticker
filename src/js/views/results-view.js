const Template = `
        <div>
            <h3 id="symbol">Stock Symbol:<%= symbol %></h3>
            <ul>
                <li>Date:<span id="date"><%=date %></span></li>
                <li>Price:<span  id="price"><%=price%></span></li>
                <li>High:<span  id="high"><%=highest%></span></li>
                <li>Low:<span id="low"><%=lowest%></span></li>
                <li>Change Percent:<span id="change"><%=changePercent %></span></li>
            </ul>
        </div>
        `
export default Template;