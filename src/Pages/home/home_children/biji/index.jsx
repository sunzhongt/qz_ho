import React,{Component} from 'react'; 
import './style.scss'; 
 
import {createHashHistory} from "history"
import { Row, Col, Table, Tag, Divider, Button, Icon,List,Avatar,Rate ,Card,Tabs   } from 'antd';
 
 const windowHieght= window.innerHeight;
 const inputBoxHeight= window.innerHeight/100*40;
 const { TabPane } = Tabs;
 const { Meta } = Card;
class BiJi extends Component {
    constructor(){
        super(); 
        this.state={
            dataTabs: {
                a:[
                   {
                       title:"二次函数的应用",
                       tag:["数学","二次函数","初中"],
                       text:[
                           "二次函数（quadratic function）的基本表示形式为y=ax²+bx+c（a≠0）。二次函数最高次必须为二次， 二次函数的图像是一条对称轴与y轴平行或重合于y轴的抛物线。",
                           "二次函数表达式为y=ax²+bx+c（且a≠0），它的定义是一个二次多项式（或单项式）。",
                           "一般式：y=ax²+bx+c(a≠0，a、b、c为常数)，则称y为x的二次函数。",
                           "顶点式：y=a(x-h)²+k(a≠0，a、h、k为常数)。",
                           "交点式（与x轴）：y=a(x-x1)(x-x2)(a≠0，a、且x1、x2为常数)x1、x2为二次函数与x轴的两交点。",
                           "等高式：y=a(x-x1)(x-x2)+m(a≠0，且过（x1、m）（x2、m）为常数)x1、x2为二次函数与直线y=m的两交点。",
                           "如果令y值等于零，则可得一个二次方程。该方程的解称为方程的根或函数的零点。 ",
                       ],
                       describe:"二次函数（quadratic function）的基本表示形式为y=ax²+bx+c（a≠0）。二次函数最高次必须为二次， 二次函数的图像是一条对称轴与y轴平行或重合于y轴的抛物线。",
                       date:"2019-18-21"

                   },
                   {
                    title:"出师表的理解",
                    tag:["语文","文言文","初中"],
                    text:[
                       "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。",
                       "宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。"  ,
                       "侍中、侍郎郭攸之、费祎、董允等，此皆良实，志虑忠纯，是以先帝简拔以遗陛下。愚以为宫中之事，事无大小，悉以咨之，然后施行，必能裨补阙漏，有所广益。",
                       "将军向宠，性行淑均，晓畅军事，试用于昔日，先帝称之曰能，是以众议举宠为督。愚以为营中之事，悉以咨之，必能使行阵和睦，优劣得所。",
                       "亲贤臣，远小人，此先汉所以兴隆也；亲小人，远贤臣，此后汉所以倾颓也。先帝在时，每与臣论此事，未尝不叹息痛恨于桓、灵也。侍中、尚书、长史、参军，此悉贞良死节之臣，愿陛下亲之信之，则汉室之隆，可计日而待也。",
                       "臣本布衣，躬耕于南阳，苟全性命于乱世，不求闻达于诸侯。先帝不以臣卑鄙，猥自枉屈，三顾臣于草庐之中，咨臣以当世之事，由是感激，遂许先帝以驱驰。后值倾覆，受任于败军之际，奉命于危难之间，尔来二十有一年矣。",
                       "先帝知臣谨慎，故临崩寄臣以大事也。受命以来，夙夜忧叹，恐托付不效，以伤先帝之明，故五月渡泸，深入不毛。今南方已定，兵甲已足，当奖率三军，北定中原，庶竭驽钝，攘除奸凶，兴复汉室，还于旧都。此臣所以报先帝而忠陛下之职分也。至于斟酌损益，进尽忠言，则攸之、祎、允之任也。",
                       "愿陛下托臣以讨贼兴复之效，不效，则治臣之罪，以告先帝之灵。若无兴德之言，则责攸之、祎、允等之慢，以彰其咎；陛下亦宜自谋，以咨诹善道，察纳雅言。深追先帝遗诏，臣不胜受恩感激。",
                       "今当远离，临表涕零，不知所言。",
                       "《出师表》出自于《三国志·诸葛亮传》卷三十五，是三国时期（227年）蜀汉丞相诸葛亮在决定北上伐魏、夺取长安（今汉长安城遗址）之前给后主刘禅上书的表文。" , 
                       " 这篇表文以议论为主，兼用记叙和抒情。以恳切委婉的言辞劝勉后主要广开言路、严明赏罚、亲贤远佞，以此兴复汉室 还于旧都；同时也表达自己以身许国，忠贞不二的思想。全文既不借助于华丽的辞藻，又不引用古老的典故，多以四字句行文。"
                    ] ,
                    describe:"先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。",
                    date:"2019-18-21"

                   } 
                ],
                b:[
                    {
                        title:"蒙特梭利教学法",
                        date:"2019-10-09",
                        id:1,
                        describe:"蒙台梭利（Montessori）教学法是由意大利教育家玛莉亚·蒙特梭利博士倾其毕生经历所创造的。其教学法的精髓在于培养幼儿自觉主动的学习和探索精神。在蒙氏教室里，有丰富多彩的教具，它们都是根据儿童成长发展敏感期所创立的适宜儿童成长的“玩具”。蒙台梭利教学内容包括日常生活教育、感官教育、数学教育、语言教育、科学文化教育等内容。孩子通过自我重复操作蒙氏教具创新建构完善的人格，在自由操作中得到了多方面的能力训练。",
                        text:[
                            {
                                title:"教育理念",
                                text:[
                                    "使人成为人",
                                    "蒙台梭利教育是使人成为人。第一个人是刚刚出生的生物性的人；第二个人是为人，为人就是受过教育，具备了教养、具备了人格的人。这就是蒙台梭利教育的意义，也就是人格形成才能成为真正的人。",
                                    "自发性的智能",
                                    "人之所以有学习的欲望，就是受到与生俱来的智能所驱使，也就是孩子内在有一种执著追求知识和求发展的冲动。如果这种内在冲动不通过教育去启动他，将会使幼儿本身存在着的巨大能量迟滞、消磨。",
                                    "人的创造性",
                                    "其实，这可以说是人类的一种自然性，对人类而言，创造是自然而生的。蒙台梭利认为手的活动及语言在不断地保持调和，最后才能培养出孩子自己的人格，而人格在成长过程中发挥各种创造能力。",
                                    "协助孩子自我发展",
                                    "传统的教育则是成人在那里不断地教导儿童怎样怎样去做，儿童就遵命式地去服从。那么，蒙台梭利教育就是让儿童发挥他自身的生命潜能，通过自身的实际的这种活动来发展自己各个方面，这是教育的真谛。",
                                    "有准备的环境",
                                    "蒙台梭利认为环境是有生命的，是成人对儿童的使命清楚了解所准备的，这个环境包含儿童成长所需的一切事物的积极意义，同时也要将所有不利于儿童成长的事物加以排除。",
                                    
                                ]
                            },
                            {
                                title:"特性",
                                text:[
                                    "环境是重要的教育要素",
                                    "以前，人们认为教育的要素是教师与儿童。教师教，儿童学。蒙台梭利认为孩子会自己学，因此环境的提供成为教育的一个重要的要素，孩子要从环境中学习。因此蒙台梭利对环境的创设有基本的原则。成人要根据孩子发展的敏感期，为儿童创设适应其发展的环境。",
                                    "儿童在环境引导下自动自发地学习",
                                    "孩子可以自动地去利用环境，自主选择。成人没有权利去指挥、命令。孩子自己选择想要做的工作，成人尊重孩子的意愿。这样，就充分发挥了孩子的主动性，使学习变得轻松愉快。",
                                    "有限制的自由",
                                    "孩子的工作具有很大的自主性，享有很大的自由，但这种自由不是没有限制的。蒙台梭利对孩子的活动有一套完整的规则，在保障每个孩子充分享受自由的同时，也要求孩子自律。不破坏环境，不妨碍他人。",
                                    "成人是孩子活动的协助者",
                                    "成人不再是教导者，从教导者变成了一个协助者。成人给予孩子引导、帮助和建议。而这些协助都是在孩子需要的时候。成人通过观察，了解孩子的发展、进步及遇到的问题，然后决定给孩子提供协助的方法、时机，避免无端地干扰孩子。",
                                    "教具是孩子学习的工具",
                                    "教具是让孩子认识生活，练习独立能力和建构人格的学习材料。蒙台梭利研究制作出许多教具，把生活、物体、现象当中的某些特征突出、孤立起来，让孩子去感知。当孩子具备感知、认识这些特征的能力之后，再把它回归到生活当中。这样，就把过去老师靠说教传授的东西转移到丰富多彩的教具当中，教具引发儿童的兴趣，儿童在操作的工作中自我成长。同时这些教具还有错误纠正的功能。",
                                    "大容量的认知",
                                    "蒙台梭利教育是大容量的认知，她的领域是很广阔的。老师要根据儿童的需求，不断地制作新的教具。由于各国文化的差异，她选择感官与数学这两个领域，制作了大量的教具，几乎世界通用。而语言、科技、生活等领域则需要教师根据本土文化去设计和制作。",
                                    
                                ]
                            },
                            {
                                title:"具体教学内容",
                                text:[
                                    "日常生活教育:包括基本动作、照顾自己、照顾环境、生活礼仪等，培养日常生活自理能力，以及互动、爱物等好习惯。",
                                    "感官教育: 培养敏锐的感官，进而培养观察、比较、判断的习惯与能力，感官教育又包括，视觉、触觉、听觉味觉、嗅觉教育。",
                                    "数学教育: 使用直观教具玩数学。让孩子在学具操作中懂得数与量的关系，感受四则运算的快乐。",
                                    "语言教学: 让孩子通过对实物的描述，促进语言表达能力的发展，同时渗透文字活动，培养阅读能力，为书写做准备。",
                                    "文化教育: 蒙氏教室里备有动物、植物、天文、地理、历史、地质等各方面教具，使儿童在玩中探索科学的奥秘，从宏观到微观，培养对科学的兴趣。",
                                     

                                ]
                            },
                            {
                                title:"特点",
                                text:[
                                    "以儿童为主 为孩子打造一个以他们为中心，让他们可以独立“做自己”的“儿童世界”.",
                                    "提供充分的教具 :孩子是靠感官来学习的，幼蒙台梭利教室为孩子提供了丰富的教材教具（包括自然的、人文的……），以诱发孩子自我学习的乐趣。",
                                    "不“教”的教育: 反对传统以教师为中心的填鸭式教育，主张提供良好的学习环境，亮丽丰富的教具，让儿童主动去接触、研究，形成智慧。",
                                    "把握敏感期的学习: 0-6岁的儿童，在不同的成长阶段，会出现对不同事物的偏好，也就是所谓的“儿童敏感期”。蒙台梭利幼教法强调掌握儿童的“敏感期”，而给予孩子恰当的引导。",
                                    "教师居于协助启导的地位 教师必须放弃传统的自以为是的教育方式，而是从旁适时地给予儿童协助与引导，让儿童成为教育的主体，使他们开动脑筋，挖掘潜力。",
                                    "“教育的目的不仅仅是传播知识，应该有一种新的发展方向，那就是释放人的潜能。什么时候开始这样的教育呢？我的回答是在人出生起就要进行这样的教育，因为人一出生就具有无限潜能。”",
                                    "----玛利娅·蒙特梭利（Maria Montessori）",
                                    "蒙特梭利教育法在今天已经被实践证明是一种科学的育儿方法。从开创之日起，蒙特梭利教育法就很快风行欧美各国，在全世界范围内掀起了一场持续一百多年的幼儿教育革命。全世界已有一百多个国家设立了以蒙氏教育法为指导的幼儿教育机构。在倡导素质教育、崇尚自由个性的当代中国，蒙特梭利儿童教育法也正在逐渐改变中国人的教育理念。",
                                    "作为20世纪世界公认的伟大教育家之一，蒙特梭利博士几乎就是现代科学教育法的代名词。她开创的蒙特梭利早期教育法赢得了世界各国教育者的尊敬和崇高评价，极大地推动了世界各国儿童教育的发展。",


                                ]
                            },
                            {
                                title:"特点",
                                text:[
                                    "以儿童为主 为孩子打造一个以他们为中心，让他们可以独立“做自己”的“儿童世界”.",
                                    "提供充分的教具 :孩子是靠感官来学习的，幼蒙台梭利教室为孩子提供了丰富的教材教具（包括自然的、人文的……），以诱发孩子自我学习的乐趣。",
                                    "不“教”的教育: 反对传统以教师为中心的填鸭式教育，主张提供良好的学习环境，亮丽丰富的教具，让儿童主动去接触、研究，形成智慧。",
                                    "把握敏感期的学习: 0-6岁的儿童，在不同的成长阶段，会出现对不同事物的偏好，也就是所谓的“儿童敏感期”。蒙台梭利幼教法强调掌握儿童的“敏感期”，而给予孩子恰当的引导。",
                                    "教师居于协助启导的地位 教师必须放弃传统的自以为是的教育方式，而是从旁适时地给予儿童协助与引导，让儿童成为教育的主体，使他们开动脑筋，挖掘潜力。",
                                    "“教育的目的不仅仅是传播知识，应该有一种新的发展方向，那就是释放人的潜能。什么时候开始这样的教育呢？我的回答是在人出生起就要进行这样的教育，因为人一出生就具有无限潜能。”",
                                    "----玛利娅·蒙特梭利（Maria Montessori）",
                                    "蒙特梭利教育法在今天已经被实践证明是一种科学的育儿方法。从开创之日起，蒙特梭利教育法就很快风行欧美各国，在全世界范围内掀起了一场持续一百多年的幼儿教育革命。全世界已有一百多个国家设立了以蒙氏教育法为指导的幼儿教育机构。在倡导素质教育、崇尚自由个性的当代中国，蒙特梭利儿童教育法也正在逐渐改变中国人的教育理念。",
                                    "作为20世纪世界公认的伟大教育家之一，蒙特梭利博士几乎就是现代科学教育法的代名词。她开创的蒙特梭利早期教育法赢得了世界各国教育者的尊敬和崇高评价，极大地推动了世界各国儿童教育的发展。",
                                    

                                ]
                            },
                        ]
                    },
                    {
                        title:"蒙特梭利教学法",
                        date:"2019-10-09",
                        id:2,
                        describe:"蒙台梭利（Montessori）教学法是由意大利教育家玛莉亚·蒙特梭利博士倾其毕生经历所创造的。其教学法的精髓在于培养幼儿自觉主动的学习和探索精神。在蒙氏教室里，有丰富多彩的教具，它们都是根据儿童成长发展敏感期所创立的适宜儿童成长的“玩具”。蒙台梭利教学内容包括日常生活教育、感官教育、数学教育、语言教育、科学文化教育等内容。孩子通过自我重复操作蒙氏教具创新建构完善的人格，在自由操作中得到了多方面的能力训练。",
                        text:[
                            {
                                title:"教育理念",
                                text:[
                                    "使人成为人",
                                    "蒙台梭利教育是使人成为人。第一个人是刚刚出生的生物性的人；第二个人是为人，为人就是受过教育，具备了教养、具备了人格的人。这就是蒙台梭利教育的意义，也就是人格形成才能成为真正的人。",
                                    "自发性的智能",
                                    "人之所以有学习的欲望，就是受到与生俱来的智能所驱使，也就是孩子内在有一种执著追求知识和求发展的冲动。如果这种内在冲动不通过教育去启动他，将会使幼儿本身存在着的巨大能量迟滞、消磨。",
                                    "人的创造性",
                                    "其实，这可以说是人类的一种自然性，对人类而言，创造是自然而生的。蒙台梭利认为手的活动及语言在不断地保持调和，最后才能培养出孩子自己的人格，而人格在成长过程中发挥各种创造能力。",
                                    "协助孩子自我发展",
                                    "传统的教育则是成人在那里不断地教导儿童怎样怎样去做，儿童就遵命式地去服从。那么，蒙台梭利教育就是让儿童发挥他自身的生命潜能，通过自身的实际的这种活动来发展自己各个方面，这是教育的真谛。",
                                    "有准备的环境",
                                    "蒙台梭利认为环境是有生命的，是成人对儿童的使命清楚了解所准备的，这个环境包含儿童成长所需的一切事物的积极意义，同时也要将所有不利于儿童成长的事物加以排除。",
                                    
                                ]
                            },
                            {
                                title:"特性",
                                text:[
                                    "环境是重要的教育要素",
                                    "以前，人们认为教育的要素是教师与儿童。教师教，儿童学。蒙台梭利认为孩子会自己学，因此环境的提供成为教育的一个重要的要素，孩子要从环境中学习。因此蒙台梭利对环境的创设有基本的原则。成人要根据孩子发展的敏感期，为儿童创设适应其发展的环境。",
                                    "儿童在环境引导下自动自发地学习",
                                    "孩子可以自动地去利用环境，自主选择。成人没有权利去指挥、命令。孩子自己选择想要做的工作，成人尊重孩子的意愿。这样，就充分发挥了孩子的主动性，使学习变得轻松愉快。",
                                    "有限制的自由",
                                    "孩子的工作具有很大的自主性，享有很大的自由，但这种自由不是没有限制的。蒙台梭利对孩子的活动有一套完整的规则，在保障每个孩子充分享受自由的同时，也要求孩子自律。不破坏环境，不妨碍他人。",
                                    "成人是孩子活动的协助者",
                                    "成人不再是教导者，从教导者变成了一个协助者。成人给予孩子引导、帮助和建议。而这些协助都是在孩子需要的时候。成人通过观察，了解孩子的发展、进步及遇到的问题，然后决定给孩子提供协助的方法、时机，避免无端地干扰孩子。",
                                    "教具是孩子学习的工具",
                                    "教具是让孩子认识生活，练习独立能力和建构人格的学习材料。蒙台梭利研究制作出许多教具，把生活、物体、现象当中的某些特征突出、孤立起来，让孩子去感知。当孩子具备感知、认识这些特征的能力之后，再把它回归到生活当中。这样，就把过去老师靠说教传授的东西转移到丰富多彩的教具当中，教具引发儿童的兴趣，儿童在操作的工作中自我成长。同时这些教具还有错误纠正的功能。",
                                    "大容量的认知",
                                    "蒙台梭利教育是大容量的认知，她的领域是很广阔的。老师要根据儿童的需求，不断地制作新的教具。由于各国文化的差异，她选择感官与数学这两个领域，制作了大量的教具，几乎世界通用。而语言、科技、生活等领域则需要教师根据本土文化去设计和制作。",
                                    
                                ]
                            },
                            {
                                title:"具体教学内容",
                                text:[
                                    "日常生活教育:包括基本动作、照顾自己、照顾环境、生活礼仪等，培养日常生活自理能力，以及互动、爱物等好习惯。",
                                    "感官教育: 培养敏锐的感官，进而培养观察、比较、判断的习惯与能力，感官教育又包括，视觉、触觉、听觉味觉、嗅觉教育。",
                                    "数学教育: 使用直观教具玩数学。让孩子在学具操作中懂得数与量的关系，感受四则运算的快乐。",
                                    "语言教学: 让孩子通过对实物的描述，促进语言表达能力的发展，同时渗透文字活动，培养阅读能力，为书写做准备。",
                                    "文化教育: 蒙氏教室里备有动物、植物、天文、地理、历史、地质等各方面教具，使儿童在玩中探索科学的奥秘，从宏观到微观，培养对科学的兴趣。",
                                     

                                ]
                            },
                            {
                                title:"特点",
                                text:[
                                    "以儿童为主 为孩子打造一个以他们为中心，让他们可以独立“做自己”的“儿童世界”.",
                                    "提供充分的教具 :孩子是靠感官来学习的，幼蒙台梭利教室为孩子提供了丰富的教材教具（包括自然的、人文的……），以诱发孩子自我学习的乐趣。",
                                    "不“教”的教育: 反对传统以教师为中心的填鸭式教育，主张提供良好的学习环境，亮丽丰富的教具，让儿童主动去接触、研究，形成智慧。",
                                    "把握敏感期的学习: 0-6岁的儿童，在不同的成长阶段，会出现对不同事物的偏好，也就是所谓的“儿童敏感期”。蒙台梭利幼教法强调掌握儿童的“敏感期”，而给予孩子恰当的引导。",
                                    "教师居于协助启导的地位 教师必须放弃传统的自以为是的教育方式，而是从旁适时地给予儿童协助与引导，让儿童成为教育的主体，使他们开动脑筋，挖掘潜力。",
                                    "“教育的目的不仅仅是传播知识，应该有一种新的发展方向，那就是释放人的潜能。什么时候开始这样的教育呢？我的回答是在人出生起就要进行这样的教育，因为人一出生就具有无限潜能。”",
                                    "----玛利娅·蒙特梭利（Maria Montessori）",
                                    "蒙特梭利教育法在今天已经被实践证明是一种科学的育儿方法。从开创之日起，蒙特梭利教育法就很快风行欧美各国，在全世界范围内掀起了一场持续一百多年的幼儿教育革命。全世界已有一百多个国家设立了以蒙氏教育法为指导的幼儿教育机构。在倡导素质教育、崇尚自由个性的当代中国，蒙特梭利儿童教育法也正在逐渐改变中国人的教育理念。",
                                    "作为20世纪世界公认的伟大教育家之一，蒙特梭利博士几乎就是现代科学教育法的代名词。她开创的蒙特梭利早期教育法赢得了世界各国教育者的尊敬和崇高评价，极大地推动了世界各国儿童教育的发展。",


                                ]
                            },
                            {
                                title:"特点",
                                text:[
                                    "以儿童为主 为孩子打造一个以他们为中心，让他们可以独立“做自己”的“儿童世界”.",
                                    "提供充分的教具 :孩子是靠感官来学习的，幼蒙台梭利教室为孩子提供了丰富的教材教具（包括自然的、人文的……），以诱发孩子自我学习的乐趣。",
                                    "不“教”的教育: 反对传统以教师为中心的填鸭式教育，主张提供良好的学习环境，亮丽丰富的教具，让儿童主动去接触、研究，形成智慧。",
                                    "把握敏感期的学习: 0-6岁的儿童，在不同的成长阶段，会出现对不同事物的偏好，也就是所谓的“儿童敏感期”。蒙台梭利幼教法强调掌握儿童的“敏感期”，而给予孩子恰当的引导。",
                                    "教师居于协助启导的地位 教师必须放弃传统的自以为是的教育方式，而是从旁适时地给予儿童协助与引导，让儿童成为教育的主体，使他们开动脑筋，挖掘潜力。",
                                    "“教育的目的不仅仅是传播知识，应该有一种新的发展方向，那就是释放人的潜能。什么时候开始这样的教育呢？我的回答是在人出生起就要进行这样的教育，因为人一出生就具有无限潜能。”",
                                    "----玛利娅·蒙特梭利（Maria Montessori）",
                                    "蒙特梭利教育法在今天已经被实践证明是一种科学的育儿方法。从开创之日起，蒙特梭利教育法就很快风行欧美各国，在全世界范围内掀起了一场持续一百多年的幼儿教育革命。全世界已有一百多个国家设立了以蒙氏教育法为指导的幼儿教育机构。在倡导素质教育、崇尚自由个性的当代中国，蒙特梭利儿童教育法也正在逐渐改变中国人的教育理念。",
                                    "作为20世纪世界公认的伟大教育家之一，蒙特梭利博士几乎就是现代科学教育法的代名词。她开创的蒙特梭利早期教育法赢得了世界各国教育者的尊敬和崇高评价，极大地推动了世界各国儿童教育的发展。",
                                    

                                ]
                            },
                        ]
                    },
                ],
                c:{

                }
            }
        }
    }

    submitUserLogin=()=>{
        createHashHistory().push("/home/index"); 
    }

    

    render(){
        return (
            <div className="biji">
                  <Row>
                      <Col span={6}>
                          <div >
                               <Card  style={{ width: "100%" }}>
                                     <div className="titleMain">
                                           <Avatar size={100} src="http://img0.imgtn.bdimg.com/it/u=3172022227,2332429611&fm=26&gp=0.jpg" />
                                               
                                            <h2 style={{marginTop:"19px",fontWeight:"bold"}}>申院长</h2>
                                            <span style={{marginTop:"10px"}}>Faith is the foundation of what is expected</span>

                                     </div> 

                                     <div className="listO">
                                         <div>
                                            <Icon type="idcard" />  <span> 交互专家 </span>  
                                         </div>
                                         <div>
                                            <Icon type="cluster" />  <span> 全知学院－某某总院－某某教学部 － 院长 </span>  
                                         </div>
                                         <div>
                                           <Icon type="environment" />  <span>北京市朝阳区</span>  
                                         </div> 
                                     </div>

                                     <Divider/>

                                     <div>
                                         <h5 style={{marginBottom:"5px"}}>标签</h5>
                                           
                                         <Tag color="#f50">少女派</Tag>
                                         <Tag color="#2db7f5"> 很有想法的 </Tag>
                                         <Tag color="#87d068">海纳百川</Tag>
                                         <Tag color="#108ee9" style={{fontWeight:"bold"}}>十</Tag>
                                     </div>
                                        <Divider/>
                                     <div>
                                         <h5 style={{marginBottom:"5px"}}>团队</h5>

                                         <Row className="listColoe">
                                             <Col span={12}>
                                               <Avatar style={{marginRight:"3px"}} size={24} src="http://img2.imgtn.bdimg.com/it/u=2295666725,4244250469&fm=26&gp=0.jpg" /> <span style={{}}>蒋程程</span> 
                                             </Col>
                                             <Col span={12}>
                                              <Avatar  style={{marginRight:"3px"}} size={24} src="http://img4.imgtn.bdimg.com/it/u=2306400960,2333245100&fm=26&gp=0.jpg" /> <span>申雪莲</span> 
                                             </Col>
                                             <Col span={12}>
                                               <Avatar  style={{marginRight:"3px"}} size={24} src="http://img1.imgtn.bdimg.com/it/u=3441353795,995923638&fm=26&gp=0.jpg" />  <span>郑阳</span>
                                             </Col>
                                             <Col span={12}>
                                              <Avatar  style={{marginRight:"3px"}} size={24} src="http://img0.imgtn.bdimg.com/it/u=3283281833,3361287713&fm=26&gp=0.jpg" /> <span>钱盼盼</span>
                                             </Col>
                                             <Col span={12}>
                                               <Avatar  style={{marginRight:"3px"}} size={24} src="http://img5.imgtn.bdimg.com/it/u=330433763,372036114&fm=26&gp=0.jpg" /> <span>马瑜典</span>
                                             </Col>
                                             <Col span={12}>
                                              <Avatar  style={{marginRight:"3px"}} size={24} src="http://img4.imgtn.bdimg.com/it/u=1614121641,4002091037&fm=26&gp=0.jpg" /> <span>马瑜阳</span>
                                             </Col>
                                         </Row> 
                                     </div>
                                </Card>
                          </div>
                     
                      </Col>
                      <Col span={18}>
                          <div style={{paddingLeft:"20px"}}>
                                <Card  style={{ width: "100%" }}>
                                    <Tabs defaultActiveKey="1">
                                        <TabPane tab="笔记" key="1">
                                            {
                                                this.state.dataTabs.a.map((item,index)=>{
                                                   return (
                                                       <div className="bjList" key={index}>
                                                            <h2>{item.title}</h2>
                                                             <div>
                                                                 {
                                                                    item.tag.map((ele,i)=>{
                                                                        return  <Tag color="#87d068" key={i}>{ele}</Tag>
                                                                         
                                                                    })
                                                                 }
                                                             </div>
                                                             
                                                             <p><span>【笔记简绍】</span>   {item.text[0]}</p>
                                                             <span className="dates">日期： {item.date}</span>
                                                             <Divider/>
                                                       </div>
                                                   )
                                                })
                                            }
                                        </TabPane>
                                        <TabPane tab="文章"  key="2">
                                             {
                                                 this.state.dataTabs.b.map((item,index)=>{
                                                    return (
                                                        <div className="wenzhanglist" key={index}>
                                                               <h3>{item.title}</h3>  
                                                               <h6>作者：
                                                                   <span>
                                                                    <Avatar style={{marginLeft:4,marginRight:"7px"}} size={25} src="http://img0.imgtn.bdimg.com/it/u=3172022227,2332429611&fm=26&gp=0.jpg" />   
                                                                  申院长 </span></h6>
                                                               <p>{item.describe}</p>
                                                               
                                                                <footer>
                                                                  <span>{item.date}</span>  <Divider type="vertical"/> 
                                                                    <Icon type="like" /> 9  <Divider type="vertical"/>
                                                                    <Icon type="dislike" /> 0<Divider type="vertical"/>
                                                                    <Icon type="message" /> 1


                                                                    <span style={{float:"right",width:"80px",textAlign:"center"}}> 
                                                                       <Icon type="eye"   style={{display:"inline-block",marginRight:"10px",cursor:"pointer"}}  />
                                                                       
                                                                       <Icon type="setting"    />
                                                                    </span>
                                                                </footer>
                                                                <Divider/>
                                                        </div>
                                                    )
                                                 })
                                             }  
                                        </TabPane>
                                        <TabPane tab="书籍" key="3">
                                           <Row className="shuji">
                                              <Col span={6}>
                                                 <Card
                                                    hoverable
                                                    
                                                    actions={[
                                                        <Icon type="setting" key="setting" />,
                                                        <Icon type="edit" key="edit" />,
                                                        <Icon type="ellipsis" key="ellipsis" />,
                                                      ]}
                                                    style={{ width: "100%" }}
                                                    cover={ <img    alt="example" src="http://www.tbw-hufu.com/tuhfJDEwLmFsaWNkbi5jb20vaTEvNjY3MzcwMTUzL1RCMnJOZjhhOG1XQnVOa1NuZFZYWGNzQXBYYV8hITY2NzM3MDE1MyQ5.jpg" />}
                                                 >
                                               <Meta
                                               avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                               title="孤独症儿童教育" description="www.instagram.com" />
                                                </Card>
                                              </Col>
                                              <Col span={6}>
                                              <Card hoverable style={{ width: "100%" }} 
                                               actions={[
                                                <Icon type="setting" key="setting" />,
                                                <Icon type="edit" key="edit" />,
                                                <Icon type="ellipsis" key="ellipsis" />,
                                              ]}
                                                cover={ <img    alt="example" src="http://img0.imgtn.bdimg.com/it/u=201290821,144623069&fm=26&gp=0.jpg" />}
                                                 >
                                               <Meta 
                                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                               title="发展心理学" description="www.instagram.com" />
                                                </Card>
                                              </Col>
                                              <Col span={6}>
                                              <Card hoverable style={{ width: "100%" }} 
                                               actions={[
                                                <Icon type="setting" key="setting" />,
                                                <Icon type="edit" key="edit" />,
                                                <Icon type="ellipsis" key="ellipsis" />,
                                              ]}
                                                cover={ <img    alt="example" src="http://www.tbw-xie.com/tuxieJDEwLmFsaWNkbi5jb20vaTIvODg3Mzk2NzA5L1RCMnJxajFnS3lTQnVOankxemRYWFhQeEZYYV8hITg4NzM5NjcwOSQ5.jpg" />}
                                                 >
                                               <Meta
                                                avatar={<Avatar src="http://att3.citysbs.com/200x240/hangzhou/2016/01/15/13/200x289-133826_v2_14221452836306915_c6f746dc643dff05fea23b9a45e6bdb2.jpg" />}
                                               title="蒙台梭利幼儿教育" description="www.instagram.com" />
                                                </Card>
                                              </Col>
                                              <Col span={6}>
                                              <Card hoverable style={{ width: "100%" }} 
                                               actions={[
                                                <Icon type="setting" key="setting" />,
                                                <Icon type="edit" key="edit" />,
                                                <Icon type="ellipsis" key="ellipsis" />,
                                              ]}
                                                cover={ <img    alt="example" src="http://img03.taobaocdn.com/bao/uploaded/i3/1092889017/O1CN01zy7p382GTpplNaf4T_!!0-item_pic.jpg_210x210.jpg" />}
                                                 >
                                               <Meta  avatar={<Avatar src="http://att3.citysbs.com/200x240/hangzhou/2016/01/15/13/200x289-133826_v2_14221452836306915_c6f746dc643dff05fea23b9a45e6bdb2.jpg" />}
                                                title="蒙台梭利早期教育法" description="www.instagram.com" />
                                                </Card>
                                              </Col>
                                           </Row>
                                        </TabPane>
                                    </Tabs>  
                                </Card>
                           </div>
                      </Col>

                      
                  </Row>      
            </div>
       )
    }
 }  

export default BiJi;