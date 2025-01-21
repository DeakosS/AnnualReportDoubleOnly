import { ref } from 'vue';
import * as echarts from 'echarts';

export var key = '';

export const myavatar = ref('./header/header13.webp');
export const hisavatar = ref('./header/header45.webp');
export const mynickname = ref('猫猫侠');
export const hisnickname = ref('宝宝酱');

export const CardData = ref({
    myavatarSrc: './header/header13.webp',
    hisavatarSrc: './header/header45.webp',
    mynickname: '猫猫侠',
    hisnickname: '宝宝酱',
    summaryText: '夜晚总是真情涌动时',
    firstChatDate: '2022-04-21 11:14',
    mostChatYear: '2024',
    mostChatMonth: '02',
    mostChatCount: 7563,
    leftTags: [
        {
            "label": "聊天天数",
            "value": 360,
            "unit": "天"
        },
        {
            "label": "侠发送消息",
            "value": 26594,
            "unit": "条"
        },
        {
            "label": "酱发送消息",
            "value": 30685,
            "unit": "条"
        },
        {
            "label": "总字数",
            "value": 274141,
            "unit": "字"
        }],
    rightTags: [
        {
            "label": "年度关键词",
            "value": "吃东西&收拾"
        },
        {
            "label": "活跃时段",
            "value": "20:00-23:00"
        },
        {
            "label": "我们常用emoji表情",
            "image": "./header/blockwulian.webp",
			"image1": "./header/blockdoge.webp"
        }
    ],
});

export const daysSinceFirstChat = ref(1012);
export const cardName = ref('2024年度报告');


function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

export const Calendardata = ref({
    daysChatted: 206,
    mostActiveYear: "2024",
    mostActiveMonth: "04",
    averageChats: 91,
    peakChatYear: "2024",
    peakChatMonth: "05",
    peakChatDay: "18",
    peakChats: 265,
    data: getVirtualData('2024'),
    max_day_count: 10000,
    min_day_count: 0
});

export const chatData = ref({
    mynickname: "猫猫侠",
    hisnickname: "宝宝酱",
    totalmessages:57279,
    totalwords: 274141,
    totalvoice: 99,
    totalimages: 1733,
    totalemojis: 9013,
    emoji: "./header/blockwulian.webp",
	emoji2: "./header/blockdoge.webp",
    send_msg_num:26594,
    receive_msg_num:30685,
    total_message_size:2345, // 聊天数据大小，单位：MB
    my_type_count:[['文本',18548],['图片',516],['语音',27],['表情包',6302],['视频',26],['分享链接',1062]],
    ta_type_count:[['文本',24305],['图片',1217],['语音',72],['表情包',2711],['视频',12],['分享链接',1474]],
});

export const quarterData = ref([
    {
        'season': '春',
        'title': '春的呢喃',
        'text': '春天的气息悄然降临，万物复苏，花瓣在阳光下轻舞，似乎在低语着生命的奥秘。每一次呼吸都充满希望，梦想在心中悄然绽放。'
    },
    {
        'season': '夏',
        'title': '夏日的热情',
        'text': '炎炎夏日，阳光如金，海浪轻拍岸边，带来无限的欢愉。树荫下的微风，似乎诉说着青春的故事，令人心向往之，乐在其中。'
    },
    {
        'season': '秋',
        'title': '秋的沉思',
        'text': '秋天的落叶如诗，轻轻飘落，仿佛在叙述过往的回忆。金黄的田野上，丰收的喜悦萦绕心头，静谧中透出深邃的思考与感悟。'
    },
    {
        'season': '冬',
        'title': '冬的静谧',
        'text': '寒冬降临，银装素裹，世界在白雪的覆盖下沉睡。炉火旁的温暖，仿佛是心灵的慰藉，静静等待着春的再次来临，重燃希望。'
    }
]);

export const FirstData_isReady = ref(true);
export const firstChatData = ref({
    "firstChatDate": {
        "year": "2022",
        "month": "04",
        "day": "21"
    },
    "initiator": "宝宝酱",
    "conversation": [
        {
            "side": "left",
            "avatarSrc": "/header/header45.webp",
            "content": "猫猫侠"
        },
        {
            "side": "left",
            "avatarSrc": "/header/header45.webp",
            "content": "做梦梦到我导催我稿了"
        },
        {
            "side": "left",
            "avatarSrc": "/header/header45.webp",
            "content": "呜呜焦虑了"
        },
        {
            "side": "right",
            "avatarSrc": "/header/header13.webp",
            "content": "早宝子"
        },
        {
            "side": "right",
            "avatarSrc": "/header/header13.webp",
            "content": "抱抱宝宝"
        }
    ]
})

export const keyWordsData = ref({
    "mykeyWord": {
        "keyWord": "宝宝",
        "keyWordCount": 837
    },
    "takeyWord": {
        "keyWord": "猫猫",
        "keyWordCount": 217
    },
    "messages": [
        {
            "side": "right",
            "content": "此生唯宝宝和美食不可辜负",
        },
        {
            "side": "left",
            "content": "猫猫猪",
        },
        {
            "side": "right",
            "content": "安静的抱抱宝宝",
        },
        {
            "side": "left",
            "content": "胖脸猫猫",
        },
        {
            "side": "right",
            "content": "宝宝读书大业不容差池",
        },
        {
            "side": "left",
            "content": "奥密克戎大人，猫猫侠无意冒犯",
        }
    ]
});

export const mykeyWord = ref({
    "keyWord": "宝宝",
    "keyWordCount": 837
});

export const takeyWord = ref({
    "keyWord": "猫猫",
    "keyWordCount": 217
});

export const isReady = ref(false);
export const visibleText = ref([]);
export const currentIndex = ref(0);

export const Welcome_data = {
    descriptionText: {
        hello: "Hello World!",
        text1: "时光荏苒，转眼间我们又走过了一年。",
        text2: "在过去的365天里，从深夜的长谈到清晨的早安，从生活中的琐事到工作中的忙碌……",
        text4: "这些聊天记录，是属于我们的独家记忆。",
        text7: "打开报告，开启我们的专属年度记忆吧！"
    }
}

export const allText = ref([
    Welcome_data.descriptionText.hello,
    Welcome_data.descriptionText.text1,
    Welcome_data.descriptionText.text2,
    Welcome_data.descriptionText.text4,
    Welcome_data.descriptionText.text7
])

export const chatdescription = ref({
    "timedes": "深夜的",
    "summary": "你们最爱在深夜聊天",
    "timePeriod": "20:00-23:00",
    "quote": [
        "每一次热烈的对话",
        "都是灵魂的一次旅行"
    ],
    "data": [
        1251,
        419,
        313,
        55,
        57,
        97,
        41,
        441,
        1940,
        2890,
        3209,
        3741,
        3003,
        1462,
        2045,
        2133,
        3150,
        3624,
        2969,
        3268,
        4652,
        5346,
        7374,
        3799
    ],
    "remarks": [
        "你们聊到很晚",
        "那天一定有你们难忘的回忆吧"
    ],
    "favoriteChatDate": {
        "is_exist": 1,
        "year": "2024",
        "month": "04",
        "day": "20"
    }
});

export const summaryText = ref('夜晚总是真情涌动时');

export const wxid = 'wxid_1234567890';

// 头像链接
export const reportName = '2024微信聊天报告';
// 网站链接
export const websiteUrl = '';
// 网站链接文本显示内容
export const websiteUrlText = '';
// 底部文本
export const bottomText = '数据截止日期：2025年1月20日';

export const UPLOAD_URL = ''
