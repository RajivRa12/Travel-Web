module.exports = {

"[project]/.next-internal/server/app/agents/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "agents": (()=>agents),
    "destinations": (()=>destinations),
    "mockBookings": (()=>mockBookings),
    "packages": (()=>packages),
    "testimonials": (()=>testimonials)
});
const packages = [
    {
        id: 1,
        title: "Bangkok & Pattaya Discovery",
        slug: "bangkok-pattaya-discovery",
        destination: "Thailand",
        duration: "5 Days",
        rating: 4.5,
        price: "35,000",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop",
        hint: "thailand beach temple golden",
        isWishlisted: false,
        agentId: 1,
        groupSize: {
            min: 2,
            max: 8
        },
        category: "Adventure"
    },
    {
        id: 2,
        title: "Enchanting Bali Getaway",
        slug: "enchanting-bali-getaway",
        destination: "Indonesia",
        duration: "7 Days",
        rating: 4.8,
        price: "45,000",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&h=400&fit=crop",
        hint: "bali temple rice terraces sunset",
        isWishlisted: true,
        agentId: 2,
        groupSize: {
            min: 2,
            max: 12
        },
        category: "Culture & Relaxation"
    },
    {
        id: 3,
        title: "Highlights of Vietnam",
        slug: "highlights-of-vietnam",
        destination: "Vietnam",
        duration: "6 Days",
        rating: 4.6,
        price: "42,000",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=600&h=400&fit=crop",
        hint: "vietnam halong bay mountains landscape",
        isWishlisted: false,
        agentId: 3,
        groupSize: {
            min: 4,
            max: 16
        },
        category: "Cultural Heritage"
    },
    {
        id: 4,
        title: "Singapore City Spectacular",
        slug: "singapore-city-spectacular",
        destination: "Singapore",
        duration: "4 Days",
        rating: 4.7,
        price: "55,000",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=400&fit=crop",
        hint: "singapore skyline marina bay modern",
        isWishlisted: false,
        agentId: 4,
        groupSize: {
            min: 1,
            max: 6
        },
        category: "City Break"
    },
    {
        id: 5,
        title: "Malaysian Marvels",
        slug: "malaysian-marvels",
        destination: "Malaysia",
        duration: "6 Days",
        rating: 4.4,
        price: "48,000",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
        hint: "malaysia kuala lumpur towers city",
        isWishlisted: false,
        agentId: 2,
        groupSize: {
            min: 2,
            max: 10
        },
        category: "Cultural Heritage"
    },
    {
        id: 6,
        title: "Colors of Sri Lanka",
        slug: "colors-of-sri-lanka",
        destination: "Sri Lanka",
        duration: "8 Days",
        rating: 4.9,
        price: "60,000",
        image: "https://images.unsplash.com/photo-1566198411923-6b89ffdc657a?w=600&h=400&fit=crop",
        hint: "sri lanka tea plantation green mountains",
        isWishlisted: false,
        agentId: 4,
        groupSize: {
            min: 2,
            max: 14
        },
        category: "Nature & Wildlife"
    },
    {
        id: 7,
        title: "Philippine Island Hopping",
        slug: "philippine-island-hopping",
        destination: "Philippines",
        duration: "10 Days",
        rating: 4.8,
        price: "75,000",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop",
        hint: "philippines palawan boats crystal clear water",
        isWishlisted: false,
        agentId: 3,
        groupSize: {
            min: 4,
            max: 20
        },
        category: "Adventure"
    },
    {
        id: 8,
        title: "Laos Heritage Trail",
        slug: "laos-heritage-trail",
        destination: "Laos",
        duration: "5 Days",
        rating: 4.5,
        price: "40,000",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        hint: "laos luang prabang temple monks",
        isWishlisted: false,
        agentId: 1,
        groupSize: {
            min: 2,
            max: 8
        },
        category: "Cultural Heritage"
    },
    {
        id: 9,
        title: "Romantic Maldives Escape",
        slug: "romantic-maldives-escape",
        destination: "Maldives",
        duration: "5 Days",
        rating: 4.9,
        price: "120,000",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
        hint: "maldives overwater villa turquoise water",
        isWishlisted: false,
        agentId: 2,
        groupSize: {
            min: 2,
            max: 4
        },
        category: "Luxury & Romance"
    },
    {
        id: 10,
        title: "Bhutan Kingdom Discovery",
        slug: "bhutan-kingdom-discovery",
        destination: "Bhutan",
        duration: "7 Days",
        rating: 4.7,
        price: "95,000",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop",
        hint: "bhutan monastery mountains prayer flags",
        isWishlisted: false,
        agentId: 3,
        groupSize: {
            min: 4,
            max: 12
        },
        category: "Cultural Heritage"
    },
    {
        id: 11,
        title: "Myanmar Golden Pagodas",
        slug: "myanmar-golden-pagodas",
        destination: "Myanmar",
        duration: "8 Days",
        rating: 4.6,
        price: "65,000",
        image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=600&h=400&fit=crop",
        hint: "myanmar bagan temples golden sunset",
        isWishlisted: false,
        agentId: 1,
        groupSize: {
            min: 2,
            max: 14
        },
        category: "Cultural Heritage"
    },
    {
        id: 12,
        title: "Cambodia Angkor Wonder",
        slug: "cambodia-angkor-wonder",
        destination: "Cambodia",
        duration: "6 Days",
        rating: 4.8,
        price: "52,000",
        image: "https://images.unsplash.com/photo-1563492065-69ad59d38ae8?w=600&h=400&fit=crop",
        hint: "cambodia angkor wat temple sunrise",
        isWishlisted: false,
        agentId: 4,
        groupSize: {
            min: 2,
            max: 16
        },
        category: "Cultural Heritage"
    },
    {
        id: 13,
        title: "Japan Cherry Blossom",
        slug: "japan-cherry-blossom",
        destination: "Japan",
        duration: "10 Days",
        rating: 4.9,
        price: "150,000",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
        hint: "japan cherry blossoms mount fuji temple",
        isWishlisted: true,
        agentId: 2,
        groupSize: {
            min: 2,
            max: 8
        },
        category: "Cultural Heritage"
    },
    {
        id: 14,
        title: "Korean Culture & K-Pop",
        slug: "korean-culture-kpop",
        destination: "South Korea",
        duration: "7 Days",
        rating: 4.6,
        price: "85,000",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
        hint: "korea seoul city skyline modern night",
        isWishlisted: false,
        agentId: 3,
        groupSize: {
            min: 2,
            max: 10
        },
        category: "City Break"
    },
    {
        id: 15,
        title: "Nepal Himalayan Trek",
        slug: "nepal-himalayan-trek",
        destination: "Nepal",
        duration: "12 Days",
        rating: 4.7,
        price: "78,000",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop",
        hint: "nepal himalayas mountains trekking adventure",
        isWishlisted: false,
        agentId: 1,
        groupSize: {
            min: 4,
            max: 12
        },
        category: "Adventure"
    },
    {
        id: 16,
        title: "Brunei Sultan's Legacy",
        slug: "brunei-sultan-legacy",
        destination: "Brunei",
        duration: "4 Days",
        rating: 4.3,
        price: "45,000",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        hint: "brunei mosque golden dome islamic",
        isWishlisted: false,
        agentId: 4,
        groupSize: {
            min: 2,
            max: 8
        },
        category: "Cultural Heritage"
    },
    {
        id: 17,
        title: "Hong Kong Skyline & Dim Sum",
        slug: "hong-kong-skyline-dimsum",
        destination: "Hong Kong",
        duration: "5 Days",
        rating: 4.5,
        price: "68,000",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        hint: "hong kong skyline victoria harbour night",
        isWishlisted: false,
        agentId: 2,
        groupSize: {
            min: 1,
            max: 8
        },
        category: "City Break"
    },
    {
        id: 18,
        title: "Taiwan Night Markets",
        slug: "taiwan-night-markets",
        destination: "Taiwan",
        duration: "6 Days",
        rating: 4.4,
        price: "58,000",
        image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=600&h=400&fit=crop",
        hint: "taiwan taipei 101 mountain food",
        isWishlisted: false,
        agentId: 3,
        groupSize: {
            min: 2,
            max: 10
        },
        category: "Cultural Heritage"
    },
    {
        id: 19,
        title: "Macau Casino & Heritage",
        slug: "macau-casino-heritage",
        destination: "Macau",
        duration: "3 Days",
        rating: 4.2,
        price: "42,000",
        image: "https://images.unsplash.com/photo-1544274904-42e4b6558f7f?w=600&h=400&fit=crop",
        hint: "macau casino lights heritage architecture",
        isWishlisted: false,
        agentId: 1,
        groupSize: {
            min: 2,
            max: 6
        },
        category: "City Break"
    },
    {
        id: 20,
        title: "Tibet Spiritual Journey",
        slug: "tibet-spiritual-journey",
        destination: "Tibet",
        duration: "9 Days",
        rating: 4.8,
        price: "110,000",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop",
        hint: "tibet potala palace mountains monks",
        isWishlisted: true,
        agentId: 4,
        groupSize: {
            min: 4,
            max: 8
        },
        category: "Cultural Heritage"
    }
];
const destinations = [
    {
        name: "All",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop",
        hint: "world travel globe"
    },
    {
        name: "Thailand",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
        hint: "thailand temple golden"
    },
    {
        name: "Vietnam",
        image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=100&h=100&fit=crop",
        hint: "vietnam halong bay"
    },
    {
        name: "Singapore",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=100&h=100&fit=crop",
        hint: "singapore marina bay"
    },
    {
        name: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=100&h=100&fit=crop",
        hint: "malaysia petronas towers"
    },
    {
        name: "Indonesia",
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=100&h=100&fit=crop",
        hint: "indonesia bali temple"
    },
    {
        name: "Philippines",
        image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=100&h=100&fit=crop",
        hint: "philippines palawan island"
    },
    {
        name: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1566198411923-6b89ffdc657a?w=100&h=100&fit=crop",
        hint: "sri lanka tea plantation"
    },
    {
        name: "Laos",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
        hint: "laos luang prabang temple"
    },
    {
        name: "Maldives",
        image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=100&h=100&fit=crop",
        hint: "maldives overwater villa"
    },
    {
        name: "Japan",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=100&h=100&fit=crop",
        hint: "japan cherry blossoms"
    },
    {
        name: "South Korea",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=100&h=100&fit=crop",
        hint: "korea seoul skyline"
    },
    {
        name: "Nepal",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=100&h=100&fit=crop",
        hint: "nepal himalaya mountains"
    },
    {
        name: "Bhutan",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=100&h=100&fit=crop",
        hint: "bhutan monastery"
    },
    {
        name: "Myanmar",
        image: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?w=100&h=100&fit=crop",
        hint: "myanmar bagan temples"
    },
    {
        name: "Cambodia",
        image: "https://images.unsplash.com/photo-1563492065-69ad59d38ae8?w=100&h=100&fit=crop",
        hint: "cambodia angkor wat"
    },
    {
        name: "Hong Kong",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
        hint: "hong kong skyline"
    },
    {
        name: "Taiwan",
        image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?w=100&h=100&fit=crop",
        hint: "taiwan taipei mountains"
    },
    {
        name: "Macau",
        image: "https://images.unsplash.com/photo-1544274904-42e4b6558f7f?w=100&h=100&fit=crop",
        hint: "macau casino heritage"
    },
    {
        name: "Tibet",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=100&h=100&fit=crop",
        hint: "tibet potala palace"
    }
];
const testimonials = [
    {
        id: 1,
        name: "Anika Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop",
        hint: "woman smiling travel happy",
        quote: "Booking through Roam Southeast was a breeze! We got an incredible deal for our Bali trip directly from the local operators. The rice terraces were absolutely breathtaking!"
    },
    {
        id: 2,
        name: "Rohan Patel",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        hint: "man travel adventure backpack",
        quote: "The transparency is what I loved. I knew exactly who I was booking with in Thailand. The package was well-planned and the floating markets experience was unforgettable. Highly recommended!"
    },
    {
        id: 3,
        name: "Priya Singh",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        hint: "woman family beach vacation",
        quote: "Found the perfect family package to Singapore. The ability to chat with the DMC before booking was a fantastic feature. The kids loved Universal Studios and Gardens by the Bay!"
    },
    {
        id: 4,
        name: "Vikram Mehta",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        hint: "man business professional",
        quote: "As a frequent business traveler, I appreciate the seamless experience. The Vietnam package exceeded expectations - Ha Long Bay cruise was spectacular and the local guides were knowledgeable."
    },
    {
        id: 5,
        name: "Kavya Reddy",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        hint: "woman solo travel adventure",
        quote: "Solo traveled to Japan through Roam Southeast. The cherry blossom season package was perfectly timed, and I felt safe throughout. Mount Fuji views were once-in-a-lifetime!"
    }
];
const agents = [
    {
        id: 1,
        name: "Siam Adventures",
        logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
        hint: "thailand travel company logo",
        rating: 4.8,
        reviews: 143,
        specialty: "Thailand, Laos, Myanmar & Nepal",
        phone: "+66 2 123 4567",
        email: "contact@siamadventures.com",
        website: "siamadventures.com",
        description: "Siam Adventures is a premier tour operator in Thailand, offering unforgettable experiences from the bustling streets of Bangkok to the serene temples of Chiang Mai. We pride ourselves on authentic local guides and personalized service."
    },
    {
        id: 2,
        name: "Bali Horizons",
        logo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=100&h=100&fit=crop",
        hint: "indonesia bali travel company",
        rating: 4.9,
        reviews: 287,
        specialty: "Indonesia, Malaysia, Maldives & Hong Kong",
        phone: "+62 361 987 654",
        email: "info@balihorizons.com",
        website: "balihorizons.com",
        description: "Explore the magic of the Indonesian archipelago with Bali Horizons. From stunning beaches to ancient temples, our expert team curates journeys that capture the heart and soul of Southeast Asia."
    },
    {
        id: 3,
        name: "Indochina Trails",
        logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
        hint: "vietnam laos travel company",
        rating: 4.7,
        reviews: 195,
        specialty: "Vietnam, Philippines, Bhutan, South Korea & Taiwan",
        phone: "+84 24 555 8888",
        email: "support@indochinatrails.com",
        website: "indochinatrails.com",
        description: "Discover the rich history and vibrant cultures of Vietnam and the Philippines with Indochina Trails. Our tours are designed to be immersive, educational, and breathtakingly beautiful."
    },
    {
        id: 4,
        name: "Lanka Pearl Tours",
        logo: "https://images.unsplash.com/photo-1566198411923-6b89ffdc657a?w=100&h=100&fit=crop",
        hint: "sri lanka travel company",
        rating: 4.9,
        reviews: 156,
        specialty: "Sri Lanka, Singapore, Cambodia, Japan, Brunei & Tibet",
        phone: "+94 11 222 3333",
        email: "bookings@lankapearl.com",
        website: "lankapearl.com",
        description: "Experience the teardrop island of Sri Lanka like never before. Lanka Pearl Tours offers bespoke itineraries covering ancient cities, lush tea plantations, and stunning coastlines."
    }
];
const mockBookings = [
    {
        id: "BK001",
        packageId: 2,
        userId: "priya@example.com",
        status: "confirmed",
        bookingDate: "2024-01-15",
        travelDate: "2024-03-15",
        travelers: 2,
        totalAmount: 90000,
        paymentStatus: "paid",
        confirmation: "RSE-BLI-2024-001"
    },
    {
        id: "BK002",
        packageId: 13,
        userId: "priya@example.com",
        status: "pending",
        bookingDate: "2024-01-20",
        travelDate: "2024-04-10",
        travelers: 2,
        totalAmount: 300000,
        paymentStatus: "pending",
        confirmation: "RSE-JPN-2024-002"
    },
    {
        id: "BK003",
        packageId: 1,
        userId: "priya@example.com",
        status: "completed",
        bookingDate: "2023-11-10",
        travelDate: "2023-12-20",
        travelers: 4,
        totalAmount: 140000,
        paymentStatus: "paid",
        confirmation: "RSE-THA-2023-003",
        review: {
            rating: 5,
            comment: "Amazing trip! The local guides were fantastic and the itinerary was perfectly planned.",
            date: "2023-12-28"
        }
    },
    {
        id: "BK004",
        packageId: 4,
        userId: "priya@example.com",
        status: "completed",
        bookingDate: "2023-08-15",
        travelDate: "2023-09-10",
        travelers: 2,
        totalAmount: 110000,
        paymentStatus: "paid",
        confirmation: "RSE-SGP-2023-004",
        review: {
            rating: 4,
            comment: "Great city break! Gardens by the Bay and Marina Bay Sands were highlights.",
            date: "2023-09-18"
        }
    }
];
}}),
"[project]/src/app/agents/[id]/client-page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentPageClientContent": (()=>AgentPageClientContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AgentPageClientContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AgentPageClientContent() from the server but AgentPageClientContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/agents/[id]/client-page.tsx <module evaluation>", "AgentPageClientContent");
}}),
"[project]/src/app/agents/[id]/client-page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentPageClientContent": (()=>AgentPageClientContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AgentPageClientContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AgentPageClientContent() from the server but AgentPageClientContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/agents/[id]/client-page.tsx", "AgentPageClientContent");
}}),
"[project]/src/app/agents/[id]/client-page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$agents$2f5b$id$5d2f$client$2d$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/agents/[id]/client-page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$agents$2f5b$id$5d2f$client$2d$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/agents/[id]/client-page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$agents$2f5b$id$5d2f$client$2d$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/agents/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AgentProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$agents$2f5b$id$5d2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/agents/[id]/client-page.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const AgentHeader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-background/80 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-4xl items-center justify-between p-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/agents/[id]/page.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/app/agents/[id]/page.tsx",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/agents/[id]/page.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/agents/[id]/page.tsx",
                    lineNumber: 12,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-foreground font-headline",
                    children: "Agent Profile"
                }, void 0, false, {
                    fileName: "[project]/src/app/agents/[id]/page.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-10"
                }, void 0, false, {
                    fileName: "[project]/src/app/agents/[id]/page.tsx",
                    lineNumber: 21,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/agents/[id]/page.tsx",
            lineNumber: 11,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/agents/[id]/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
function AgentProfilePage({ params }) {
    const agentId = parseInt(params.id, 10);
    const agent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["agents"].find((a)=>a.id === agentId);
    const agentPackages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["packages"].filter((p)=>p.agentId === agentId);
    if (!agent) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen",
            children: "Agent not found."
        }, void 0, false, {
            fileName: "[project]/src/app/agents/[id]/page.tsx",
            lineNumber: 33,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-background text-foreground",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen w-full flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(AgentHeader, {}, void 0, false, {
                        fileName: "[project]/src/app/agents/[id]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$agents$2f5b$id$5d2f$client$2d$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AgentPageClientContent"], {
                        agent: agent,
                        agentPackages: agentPackages
                    }, void 0, false, {
                        fileName: "[project]/src/app/agents/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/agents/[id]/page.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/agents/[id]/page.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/agents/[id]/page.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/app/agents/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/agents/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_e00d4c54._.js.map