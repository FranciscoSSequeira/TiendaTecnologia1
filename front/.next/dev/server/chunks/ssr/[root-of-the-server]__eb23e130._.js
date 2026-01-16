module.exports = [
"[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carousel": "Carrusel-module__XVw1la__carousel",
  "carousel-btn": "Carrusel-module__XVw1la__carousel-btn",
  "carousel-img": "Carrusel-module__XVw1la__carousel-img",
});
}),
"[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Carrusel
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.module.css [ssr] (css module)");
;
;
;
const carouselImages = [
    "/images/banner_carrusel.jpg",
    "/images/banner2_carrusel.jpg",
    "/images/banner3_carrusel.jpg"
];
function Carrusel() {
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const nextSlide = ()=>setCurrent((current + 1) % carouselImages.length);
    const prevSlide = ()=>setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].carousel,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"]["carousel-btn"],
                onClick: prevSlide,
                children: "<"
            }, void 0, false, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: carouselImages[current],
                alt: `Slide ${current + 1}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"]["carousel-img"]
            }, void 0, false, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"]["carousel-btn"],
                onClick: nextSlide,
                children: ">"
            }, void 0, false, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/proyectos/TiendaTecnologia1/front/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/proyectos/TiendaTecnologia1/front/components/Carrusel/Carrusel.js [ssr] (ecmascript)");
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "logo",
                        children: "Tienda Tecnología"
                    }, void 0, false, {
                        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: "Inicio"
                            }, void 0, false, {
                                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/productos",
                                children: "Productos"
                            }, void 0, false, {
                                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contacto",
                                children: "Contacto"
                            }, void 0, false, {
                                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                                lineNumber: 12,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$proyectos$2f$TiendaTecnologia1$2f$front$2f$components$2f$Carrusel$2f$Carrusel$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Bienvenidos a nuestra tienda"
                    }, void 0, false, {
                        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: "Encuentra los mejores productos al mejor precio."
                    }, void 0, false, {
                        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    children: "© 2025 Tienda Tecnología. Todos los derechos reservados."
                }, void 0, false, {
                    fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/proyectos/TiendaTecnologia1/front/pages/index.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb23e130._.js.map