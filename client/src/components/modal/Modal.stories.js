import React from 'react';
import { Modal } from './Modal';

export default {
    title: "components/Modal",
    component: Modal
}

const Template = (args) => <Modal item={args.item}></Modal>

export const ModalTemplate = (args) => <Template {...args}/>;
ModalTemplate.args = {
    item: {
        "id": 26,
        "type": "Product",
        "title": "나이키 바람막이",
        "sub_title": null,
        "brand_name": null,
        "price": "74100",
        "discountPercentage": 5,
        "image_url": "https://images.unsplash.com/photo-1606105961732-6332674f4ee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80",
        "brand_image_url": null,
        "follower": null
      },
}