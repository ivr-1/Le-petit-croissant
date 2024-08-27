import Story from '../story.js'
import Foodmenu from '../foodmenu.js'
import Order from '../order.js'
import Contact from '../contact.js'

const navItems = [
    {
      name: 'Our Story',
      path: "/ourstory",
      component: Story,
      meta: {
        title: "Our Story - Le Petit Croissant",
        description: "Learn more about the history and background of Le Petit Croissant.",
        ogTitle: "Our Story - Le Petit Croissant",
        ogDescription: "Discover the legacy of our restaurant.",
        ogImage: "%PUBLIC_URL%/og-contact.jpg"
      }
    },
    {
      name: 'Menu',
      path: "/foodmenu",
      component: Foodmenu,
      meta: {
        title: "Menu - Le Petit Croissant",
        description: "Explore our delicious menu offerings at Le Petit Croissant.",
        ogTitle: "Menu - Le Petit Croissant",
        ogDescription: "Check out our various dishes and offerings.",
        ogImage: "%PUBLIC_URL%/og-foodmenu.jpg"
      }
    },
    {
      name: 'Order',
      path: "/order",
      component: Order,
      meta: {
        title: "Order - Le Petit Croissant",
        description: "Place your order online at Le Petit Croissant.",
        ogTitle: "Order - Le Petit Croissant",
        ogDescription: "Order your favorite dishes from Le Petit Croissant online.",
        ogImage: "%PUBLIC_URL%/og-delivery.jpg"
      }
    },
    {
      name: 'Contact',
      path: "/contact",
      component: Contact,
      meta: {
        title: "Contact Us - Le Petit Croissant",
        description: "Get in touch with us at Le Petit Croissant.",
        ogTitle: "Contact Us - Le Petit Croissant",
        ogDescription: "We'd love to hear from you. Contact us today!",
        ogImage: "%PUBLIC_URL%/og-contact.jpg"
      }
    }
  ];

export default navItems;