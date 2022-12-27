import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote} from 'react-icons/gi';

export const services = [
    {
        id: 1,
        icon: <GiCompass className="h-2/4 w-2/4"/>,
        title: 'mission',
        text: `Fashion works like a never-ending flow of time. Understanding this, Gucci always
         knows how to renew itself by constantly releasing products that not only
         have quality but also have extremely unique, new and impressive designs, ensuring to make
         you look more trendy than ever time out.`,
    },
    {
        id: 2,
        icon: <GiDiamondHard className="h-2/4 w-2/4"/>,
        title: 'vision',
        text: 'We aim to develop Gucci to become a familiar name to consumers nationwide, reaching out to neighboring countries.',
    },
    {
        id: 3,
        icon: <GiStabbedNote className="h-2/4 w-2/4"/>,
        title: 'history',
        text: `Established in 2013, until now Gucci's store system is the "One stop fashion shop" address providing customers with
         all fashion needs with all kinds of costumer and accessories. Gucci's distinctive minimalist style brings closeness, versatility
         and enough power to make a mark for the wearer. The products of trousers, shirts, jeans, t-shirts, jackets... are all designed to
         be dynamic, easy to combine to wear to work, outing or travelling.`,
    }
];