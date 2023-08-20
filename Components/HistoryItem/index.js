const msgItemTemplate = `<div class="historyItem {{type}}">
    <div class="item">
        <div class="content_box">
            <div class="name">{{who}}</div>
            <div class="text"></div>
        </div>
    </div>
</div>`;

function generateHistoryItem(props) {
    let template = msgItemTemplate;

    if (props.type == 'text') {
        template = template.replace(
            '<div class="text"></div>',
            '<div class="text">{{msg}}</div>',
        );
    }

    if (props.type == 'image') {
        template = template.replace(
            '<div class="text"></div>',
            '<div class="text"><div class="image"><img src="{{msg}}" /></div></div>',
        );
    }

    if (props.type == 'link') {
        template = template.replace(
            '<div class="text"></div>',
            '<div class="text"><a class="link" target="_blank" href={{msg}}>連結</a></div>',
        );
    }

    return generateHtml(template, {
        ...props,
    });
}
