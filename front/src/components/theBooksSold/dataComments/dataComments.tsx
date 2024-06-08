import img1 from './icons/wumen1.png'
import img2 from './icons/wumen2.png'
import img3 from './icons/men1.png'
import Image from "next/image";

export const dataComments = [
    {
        id: 1,
        avatar: (<Image src={img1} alt='img'></Image>),
        name: 'Eleanor Pena',
        works: 'UI/UX Designer',
        desc: 'Отзывы клиентов более эффективны, чем платные маркетинговые тексты, поскольку они отвлекают внимание от продавца и направляют его на клиентов.'
    },
    {
        id: 2,
        avatar: (<Image src={img3} alt='img'></Image>),
        name: 'Theresa Webb',
        works: 'Vlogger',
        desc: 'В рекламе и продвижении отзыв или шоу представляет собой письменное заявление человека, восхваляющее достоинства продукта.'
    },
    {
        id: 3,
        avatar: (<Image src={img2} alt='img'></Image>),
        name: 'Annette Black',
        works: 'Doctor',
        desc: 'Отзывы работают, потому что они не являются сильными рекламными речами, они передают беспристрастный голос и создают доверие.'
    },

]