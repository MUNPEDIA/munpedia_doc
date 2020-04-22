module.exports = {
    base:'/',
    title: 'MUNPEDIA 模联百科',
    description: '关于模联，你想知道的一切',
    themeConfig: {
        repo: 'https://github.com/MUNPEDIA/munpedia_doc',
        repoLabel: '参与编辑',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '帮助我们改进本篇内容!',
        lastUpdated: '最近更新',
        nav: [
            {text: '模时',link:'http://47.108.171.59'},
            {text: '关于',link:'/topic_intro_munpedia/'},
            {text: '基本指南', items:[
                {text:'指南介绍',link:'/topic_guide/GuideIntro.html'},
                {text:'A.新手入门',items:[//'/Freshman/'
                    {text:'1.基本规则',link:'/topic_guide_freshman/1MUNProcedure.html'},//指定md文件以.html结尾
                    {text:'2.必要常识',link:'/topic_guide_freshman/2CommonSense.html'},//指定md文件以.html结尾
                ]
                },
                {text:'B.培训指导', items:[//'/Training/'
                    {text:'1.议题调研',link:'/topic_guide_training/1Research.html'},//指定md文件以Research.html结尾
                    {text:'2.讨论磋商',link:'/topic_guide_training/2Caucus.html'},//指定md文件以Caucus.html结尾
                    {text:'3.主题演讲',link:'/topic_guide_training/3Speech.html'},//指定md文件以Speech.html结尾
                    {text:'4.文件写作',link:'/topic_guide_training/4Writing.html'},//指定md文件以Writing.html结尾
                    ]},
                {text:'C.参会指导',items:[//'/Conference/'
                    {text:'1.会前准备',link:'/topic_guide_conference/1Preparation.html'},//指定md文件以Procedure.html结尾
                    {text:'2.会议角色',link:'/topic_guide_conference/2Role.html'},//指定md文件以Role.html结尾
                    {text:'3.会议期间',link:'/topic_guide_conference/3OfficialProcess.html'},//指定md文件以Session.html结尾
                    {text:'4.文件提交',link:'/topic_guide_conference/4PaperSubmission.html'},//指定md文件以Document.html结尾
                ]},
            ]
            },
            {text: '进阶知识', link:'/topic_advanced/'},
            {text: '举办会议', items:[
                {text:'成立社团',link:'/topic_host_organization/'},
                {text:'筹备会议',link:'/topic_host_conference/'}

            ]},
            {text: 'UN/MUN', items:[
                {text:'模拟联合国(MUN)',link:'/topic_intro_mun/'},
                {text:'联合国(UN)',link:'/topic_intro_un/'},]},
           /*{text: '更多资源', items:[
                {text:'模拟法庭',link:'/MUNKER/'},

            ]
            },*/



        ],
        plugins:[
            ['@vuepress/back-to-top']
            ['@vuepress/last-updated']
        ],
        sidebar:{
            '/topic_intro_mun/':getMUNSidebar ('关于模拟联合国','模联发展'),
            '/topic_intro_un/':getUNSidebar (),
            '/topic_intro_munpedia/':getMUNPEDIASidebar ('编辑规范'),
            // '/Freshman/':getFreshmanSidebar ('模拟联合国简介','模联基本知识'),
            // '/Training/':getTrainingSidebar ('议题调研','演讲磋商','文件写作'),
            // '/Conference/':getConferenceSidebar ('基本规则','必要常识'),
               '/topic_host/':getHostSidebar(),
               '/topic_advanced/':getAdvancedSidebar(),
            // '/MUNKER/':getMUNKERSidebar()
            '/topic_guide/':[
                'GuideIntro'
            ],
            '/topic_guide_freshman/':[
                '1MUNProcedure',
                '2CommonSense'
            ],
            '/topic_guide_training/':[
                '1Research',
                '2Caucus',
                '3Speech',
                '4Writing'
            ],
            '/topic_guide_conference/':[
                '1Preparation',
                '2Role',
                '3OfficialProcess',
                '4PaperSubmission'
            ]

        }
    }//themeconfig结尾
}//module 结尾

function getMUNSidebar (groupA,groupB) {
    return [
        '',
        {
            title: groupA,
            collapsable: false,
            children: [
                'AboutMUN',
                'MUNinChina',
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'MUNProcedure',
            ]
        },

    ]
}

function getUNSidebar() {
    return[
        '',
        'AboutUN',
        'ClimateChange',
        'SDG',
        'Refugees',

    ]
}

function getMUNPEDIASidebar(groupA){
    return[
        '',
        {
            title: groupA,
            collapsable: false,
            children: [
                '1Edit',
                '2Reference',
                '3Markdown',
                '4Example',
                '5Github',
            ]
        },
    ]
}

function getTrainingSidebar (groupA,groupB,groupC) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'Speech',


            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'Caucus',


            ]
        },
{
            title: groupC,
            collapsable: false,
            children: [
                'AcademicTraining',


            ]
        },


    ]
}

function getConferenceSidebar (groupA,groupB) {
    return [

        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'ConferenceOutline',
                'Research',
                'Skills',


            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'MUNvocabulary',
                'OfficialProcess',
                'PaperWriting',


            ]
        },

    ]
}

function getUNTopicsSidebar(groupA){
    return[
        '',
        'AboutUN',
        'SDG',
        'ClimateChange'
    ]
}

function getHostSidebar(){
    return[
        '',
    ]
}



function getAdvancedSidebar(){
    return[
        '',
        'Resource',
        'MUNvocabulary',
        'Crisis Committee',
        'LinkageSystem',
        'Historical Committee',

    ]
}