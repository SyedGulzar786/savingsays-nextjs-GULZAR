import React from "react";
import Coupons from "@/src/components/Coupons";

const componentList = {
    'coupons-list-block': Coupons,
};

export default (block, props) => {
    if (typeof componentList[block.type] !== undefined) {
        if (block?.type === 'tiptapBlock') {
            props['attrs'] = block?.attrs;
            return React.createElement(componentList[block?.attrs?.type], props);
        }
    }
}