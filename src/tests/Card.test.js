import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from "../pages/VendorList/Card";

test('render Card component', () => {
    const data = {
        "id": 212590,
        "vendorCode": "3716j2",
        "noOrder": false,
        "title": "پیتزا پرپروک (جردن)",
        "description": "فست‌فود  ,پیتزا",
        "rate": 4.4,
        "rating": 8.8141480011341,
        "logo": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/61b474d78a8a0.jpeg",
        "defLogo": "https://cdn.snappfood.ir/media/cache/vendor_logo/uploads/images/vendors/logos/61b474d78a8a0.jpeg",
        "taxEnabled": true,
        "taxIncluded": false,
        "taxEnabledInProducts": false,
        "taxEnabledInPackaging": false,
        "taxEnabledInDeliveryFee": false,
        "tax": 9,
        "serviceFee": 0,
        "deliveryArea": "",
        "discount": 0,
        "isOpen": true,
        "minDeliveryFee": 0,
        "maxDeliveryFee": 0,
        "deliveryTime": 0,
        "paymentTypes": [
            1,
            2
        ],
        "schedules": [
            {
                "type": 0,
                "weekday": 1,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 2,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 3,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 4,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 5,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 6,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            },
            {
                "type": 0,
                "weekday": 7,
                "allDay": false,
                "startHour": "11:00",
                "stopHour": "23:59"
            }
        ],
        "minOrder": 65000,
        "address": "خیابان جردن (از شمال به جنوب)، بین خیابان کاج آبادی و خیابان ناهید غربی، پلاک 184",
        "phone": "",
        "website": "",
        "status": 1,
        "lat": 35.777951,
        "lon": 51.422018,
        "restaurantClass": "",
        "foodTypes": [],
        "restaurantTypes": [],
        "isFavorite": false,
        "priority": 1000,
        "city": "تهران",
        "area": "امانيه",
        "commentCount": 13928,
        "recommendedFor": "زنده باد شادی، زنده باد پرپروک",
        "establishment": "FASTFOOD",
        "mostPopularItems": "",
        "costsForTwo": 341500,
        "onlineOrder": true,
        "voteCount": 13928,
        "discountType": null,
        "menuUrl": "https://snappfood.ir/restaurant/menu/3716j2/perperook?superTypeAlias=RESTAURANT",
        "discountValue": 0,
        "discountForAll": false,
        "containerFee": 0,
        "deliveryGuarantee": false,
        "badges": [],
        "discountStartHour1": "",
        "discountStopHour1": "",
        "discountStartHour2": "",
        "discountStopHour2": "",
        "discountValueForView": 0,
        "coverPath": "https://cdn.snappfood.ir/300x100/uploads/images/vendors/covers/652669e9155a7.jpg",
        "cuisinesArray": [
            {
                "id": 4,
                "title": "پیتزا"
            },
            {
                "id": 8,
                "title": "ساندویچ"
            },
            {
                "id": 11,
                "title": "فست فود"
            },
            {
                "id": 15,
                "title": "سوخاری"
            },
            {
                "id": 36,
                "title": "سالاد"
            }
        ],
        "preOrderEnabled": false,
        "preorderToday": {
            "weekday": "",
            "name": "",
            "startHour": "",
            "intervals": null
        },
        "vendorType": "RESTAURANT",
        "childType": "RESTAURANT",
        "budgetClass": "مناسب",
        "vendorTypeTitle": "رستوران",
        "isZFExpress": false,
        "deliveryFee": 11500,
        "backgroundImage": "https://cdn.snappfood.ir/media/cache/vendor_item_cover/uploads/images/vendors/covers/652669e9155a7.jpg",
        "backgroundImageCustom": "https://cdn.snappfood.ir/w.x.h/uploads/images/vendors/covers/652669e9155a7.jpg",
        "has_coupon": false,
        "coupon_count": 0,
        "best_coupon": "",
        "is_pro": false,
        "has_first_coupon": false,
        "userImage": [
            {
                "id": 20210071,
                "description": null,
                "fileName": "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/656386522da36.jpg",
                "thumbNailSource": "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/656386522da36.jpg",
                "likeCount": 0,
                "commentCount": 0,
                "timeDifference": 0,
                "imageType": "PRODUCT_IMAGE",
                "userType": "ZOODFOOD"
            },
            {
                "id": 20210072,
                "description": null,
                "fileName": "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/656386525b468.jpg",
                "thumbNailSource": "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/656386525b468.jpg",
                "likeCount": 0,
                "commentCount": 0,
                "timeDifference": 0,
                "imageType": "PRODUCT_IMAGE",
                "userType": "ZOODFOOD"
            },
            {
                "id": 20210073,
                "description": null,
                "fileName": "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6563865276a1e.jpg",
                "thumbNailSource": "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6563865276a1e.jpg",
                "likeCount": 0,
                "commentCount": 0,
                "timeDifference": 0,
                "imageType": "PRODUCT_IMAGE",
                "userType": "ZOODFOOD"
            },
            {
                "id": 20210074,
                "description": null,
                "fileName": "https://cdn.snappfood.ir/media/cache/product-variation_image2/uploads/images/vendors/users/app/6563865290468.jpg",
                "thumbNailSource": "https://cdn.snappfood.ir/250x250//uploads/images/vendors/users/app/6563865290468.jpg",
                "likeCount": 0,
                "commentCount": 0,
                "timeDifference": 0,
                "imageType": "PRODUCT_IMAGE",
                "userType": "ZOODFOOD"
            }
        ],
        "menuImage": [],
        "countReview": 13928,
        "countOfUserImages": 177,
        "deliveryFeeDiscount": 0,
        "trendingScore": -1,
        "delay": "",
        "deliver": true,
        "eta": -1,
        "min_eta": -1,
        "max_eta": -1,
        "open_at_eta": false,
        "action": "",
        "has_delay": false,
        "delay_time": 0,
        "total_time": 0,
        "bid": false,
        "superTypeAlias": "RESTAURANT",
        "is_food_party": false,
        "is_market_party": false,
        "click_id": null,
        "cpc_campaign_hash": null,
        "cpc_spot": null,
        "is_ecommerce": false,
        "is_economical": false,
        "is_grocery_vip": false,
        "is_grocery_returnable": false,
        "is_grocery_economic": false,
        "vendor_status": null,
        "status_title": "ACTIVE",
        "status_text": "",
        "status_description": "",
        "has_cashback": false,
        "new_type": "RESTAURANT",
        "new_type_title": "رستوران",
        "is_eco": false
    }

    const {getByText} = render(<Card vendor={data}/>);
    expect(getByText(/پرپروک/i)).toBeInTheDocument();
    expect(getByText(/4.4/i)).toBeInTheDocument();
    expect(getByText(/فست‌فود ,پیتزا/i)).toBeInTheDocument();
    expect(getByText(/پیک رستوران/i)).toBeInTheDocument();
    expect(getByText(/11,500/i)).toBeInTheDocument();
    expect(getByText(/13,928/i)).toBeInTheDocument();
    const testImage = document.querySelector("img");
    expect(testImage.alt).toContain("پرپروک");
});
