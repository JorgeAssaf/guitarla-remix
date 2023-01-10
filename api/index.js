"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_react5 = require("react");

// app/components/navbar.jsx
var import_react2 = require("@remix-run/react");

// public/img/cart.svg
var cart_default = "/build/_assets/cart-HBLAQR7D.svg";

// app/components/navbar.jsx
var import_jsx_runtime2 = require("react/jsx-runtime"), Navbar = () => {
  let location = (0, import_react2.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("nav", { className: "navegacion", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Link, { className: location.pathname === "/" ? "active" : "", to: "/", children: "Inicio" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        className: location.pathname === "/nosotros" ? "active" : "",
        to: "/nosotros",
        children: "Nosotros"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        className: location.pathname === "/guitarras" ? "active" : "",
        to: "/guitarras",
        children: "Tienda"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        className: location.pathname === "/blogs" ? "active" : "",
        to: "/blogs",
        children: "Blog"
      }
    ),
    " ",
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_react2.Link,
      {
        className: location.pathname === "/carrito" ? "active" : "",
        to: "/carrito",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: cart_default, alt: "Carrito" })
      }
    )
  ] });
}, navbar_default = Navbar;

// app/components/footer.jsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "contenedor contenido", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(navbar_default, {}),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { className: "copyright", children: [
    "Todos los derechos reservados ",
    new Date().getFullYear()
  ] })
] }) }), footer_default = Footer;

// app/components/header.jsx
var import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/header.jsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Header = () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("header", { className: "header ", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "contenedor barra", children: [
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "logo", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: logo_default, alt: "Imagen del logo" }) }) }),
  /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(navbar_default, {})
] }) }), header_default = Header;

// app/styles/index.css
var styles_default = "/build/_assets/index-VX7KCDDN.css";

// app/styles/normalize.css
var normalize_default = "/build/_assets/normalize-WF5F273L.css";

// app/root.jsx
var import_jsx_runtime5 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "GuitarLA - Remix",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  {
    rel: "stylesheet",
    href: normalize_default
  },
  { rel: "stylesheet", href: styles_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "true",
    as: "font"
  },
  {
    href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;800;900&display=swap",
    rel: "stylesheet"
  }
];
function App() {
  let initialState = typeof window < "u" ? JSON.parse(localStorage.getItem("carrito")) || [] : null, [carrito, setCarrito] = (0, import_react5.useState)(initialState), agregarAlCarrito = (guitarra) => {
    if (carrito.some((guitarraState) => guitarraState.id === guitarra.id)) {
      let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
      setCarrito(carritoActualizado);
    } else
      setCarrito([guitarra, ...carrito]);
  };
  return (0, import_react5.useEffect)(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]), /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react4.Outlet,
    {
      context: {
        agregarAlCarrito,
        carrito,
        actualizarCantidad: (guitarra) => {
          let carritoActualizado = carrito.map((guitarraState) => (guitarraState.id === guitarra.id && (guitarraState.cantidad = guitarra.cantidad), guitarraState));
          setCarrito(carritoActualizado);
        },
        setCarrito
      }
    }
  ) });
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(header_default, {}),
      children,
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(footer_default, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.LiveReload, {})
    ] })
  ] });
}
function CatchBoundary() {
  let error = (0, import_react4.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
    error.status,
    " - ",
    error.statusText,
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { className: "error-enlace", to: "/", children: "Talves quieras ir a Inicio" })
  ] }) });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Document, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "error", children: [
    error.status,
    " - ",
    error.statusText,
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react4.Link, { className: "error-enlace", to: "/", children: "Talves quieras ir a Inicio" })
  ] }) });
}

// app/routes/guitarras/index.jsx
var guitarras_exports = {};
__export(guitarras_exports, {
  default: () => guitarras_default3,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_react7 = require("@remix-run/react");

// app/components/guitarras.jsx
var import_react6 = require("@remix-run/react"), import_jsx_runtime6 = require("react/jsx-runtime"), Guitarras = ({ guitarra }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "guitarra", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "img",
    {
      src: guitarra.imagen.data.attributes.formats.medium.url,
      alt: `Imagen guitarra ${guitarra.nombre}`
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: guitarra.nombre }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "descripcion", children: guitarra.descripcion }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "precio", children: [
      "$",
      guitarra.precio
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Link, { className: "enlace", to: `/guitarras/${guitarra.url}`, children: "Ver Guitarra" })
  ] })
] }), guitarras_default = Guitarras;

// app/components/listado-guitarras.jsx
var import_jsx_runtime7 = require("react/jsx-runtime"), ListadoGuitarras = ({ guitarras }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "heading", children: "Nustra Coleccion" }),
  (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(guitarras_default, { guitarra: guitarra == null ? void 0 : guitarra.attributes }, guitarra.id)) })
] }), listado_guitarras_default = ListadoGuitarras;

// app/models/guitarras.server.js
var getGuitarras = async () => await (await fetch(
  `${process.env.API_URL}/guitarras?populate=imagen`
)).json(), getGuitarra = async (url) => await (await fetch(
  `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
)).json();

// app/styles/guitarras.css
var guitarras_default2 = "/build/_assets/guitarras-KJVOZAFG.css";

// app/routes/guitarras/index.jsx
var import_jsx_runtime8 = require("react/jsx-runtime"), meta2 = () => ({
  title: "GuitarLA - Tienda",
  description: "Catalogo de guitarras"
}), links2 = () => [{ rel: "stylesheet", href: guitarras_default2 }];
async function loader() {
  return (await getGuitarras()).data;
}
var Tienda = () => {
  let guitarras = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(listado_guitarras_default, { guitarras }) });
}, guitarras_default3 = Tienda;

// app/routes/blogs/$postUrl.jsx
var postUrl_exports = {};
__export(postUrl_exports, {
  default: () => postUrl_default,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta3
});
var import_react8 = require("@remix-run/react");

// app/models/post.server.js
var getPosts = async () => await (await fetch(
  `${process.env.API_URL}/posts?populate=imagen`
)).json(), getPost = async (url) => await (await fetch(
  `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`
)).json();

// app/utils/helpers.js
var formatDate = (date) => {
  let newDate = new Date(date), options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("es-MX", options);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-BESEN67J.css";

// app/routes/blogs/$postUrl.jsx
var import_jsx_runtime9 = require("react/jsx-runtime"), meta3 = ({ data }) => {
  var _a;
  let post = (_a = data == null ? void 0 : data.data[0]) == null ? void 0 : _a.attributes;
  return post ? {
    title: `GuitarLA - ${post.titulo}`,
    description: `GuitarLA - Blog de ${post.titulo} `
  } : {
    title: "GuitarLA - Post no encontrado",
    description: "GuitarLA - Post no encontrado"
  };
};
function links3() {
  return [{ rel: "stylesheet", href: blog_default }];
}
var loader2 = async ({ params }) => {
  let post = await getPost(params.postUrl);
  if (post.data.length === 0)
    throw new Response("", { status: 404, statusText: "Post no encontrado" });
  return post;
}, Post = () => {
  let post = (0, import_react8.useLoaderData)(), { imagen, titulo, contenido, publishedAt } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("article", { className: "contenedor post mt", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "img",
      {
        className: "imagen",
        src: imagen.data[0].attributes.url,
        alt: `Blog - ${post.titulo}`
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { children: titulo }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "fecha", children: formatDate(publishedAt) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "texto", children: contenido })
    ] })
  ] });
}, postUrl_default = Post;

// app/routes/guitarras/$url.jsx
var url_exports = {};
__export(url_exports, {
  default: () => url_default,
  links: () => links4,
  loader: () => loader3,
  meta: () => meta4
});
var import_react9 = require("@remix-run/react"), import_react10 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime"), loader3 = async ({ params }) => {
  let { url } = params, guitarra = await getGuitarra(url);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada"
    });
  return guitarra;
}, meta4 = ({ data }) => data ? {
  title: `GuitarLA - ${data.data[0].attributes.nombre}`,
  description: `GuitarLA venta de guitarras, guitarra ${data.data[0].attributes.nombre} `
} : {
  title: "GuitarLA - Guitarra no encontrada",
  description: "Catalogo de guitarras, Guitarra no encontrada"
}, links4 = () => [{ rel: "stylesheet", href: guitarras_default2 }], Guitarra = () => {
  let { agregarAlCarrito } = (0, import_react9.useOutletContext)(), [cantidad, setCantidad] = (0, import_react10.useState)(0), guitarra = (0, import_react9.useLoaderData)(), { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes, handleSubmit = (e) => {
    if (e.preventDefault(), cantidad === 0) {
      window.alert("Seleccione una cantidad mayor a 0");
      return;
    }
    let guitarraSeleccionada = {
      id: guitarra.data[0].id,
      nombre,
      precio,
      cantidad,
      imagen: imagen.data.attributes.formats.small.url
    };
    agregarAlCarrito(guitarraSeleccionada);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("main", { main: !0, className: "contenedor guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "img",
      {
        className: "imagen",
        src: imagen.data.attributes.formats.medium.url,
        alt: `Imagen de la guitarra ${nombre}`
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { children: nombre }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "texto", children: descripcion }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "precio", children: [
        "$",
        precio
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("form", { className: "formulario", onSubmit: handleSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("label", { htmlFor: "cantidad", children: "Cantidad" }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          "select",
          {
            name: "cantidad",
            id: "cantidad",
            onChange: (e) => setCantidad(Number(e.target.value)),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "0", children: "-- Seleccione --" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "1", children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "2", children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "3", children: "3" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "4", children: "4" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("option", { value: "5", children: "5" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("button", { type: "submit", children: "Agregar al carrito" })
      ] })
    ] })
  ] });
}, url_default = Guitarra;

// app/routes/blogs/index.jsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => blogs_default,
  links: () => links5,
  loader: () => loader4,
  meta: () => meta5
});
var import_react12 = require("@remix-run/react");

// app/components/post.jsx
var import_react11 = require("@remix-run/react");
var import_jsx_runtime11 = require("react/jsx-runtime"), Post2 = ({ post }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("article", { className: "post", children: [
  /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "img",
    {
      className: "imagen",
      src: post.imagen.data[0].attributes.formats.small.url,
      alt: `Blog - ${post.titulo}`
    }
  ),
  /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { children: post.titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "fecha", children: formatDate(post.publishedAt) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "resumen", children: post.contenido }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react11.Link, { className: "enlace", to: `/blogs/${post.url}`, children: "Leer m\xE1s" })
  ] })
] }), post_default = Post2;

// app/components/listado-post.jsx
var import_jsx_runtime12 = require("react/jsx-runtime"), ListadoPost = ({ posts }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h2", { className: "heading", children: "Blog" }),
  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(post_default, { post: post.attributes }, post.id)) })
] }), listado_post_default = ListadoPost;

// app/routes/blogs/index.jsx
var import_jsx_runtime13 = require("react/jsx-runtime"), meta5 = () => ({
  title: "GuitarLA - Nuestro Blog",
  description: "GuitarLA - Blog de m\xFAsica y guitarras"
}), links5 = () => [{ rel: "stylesheet", href: blog_default }], loader4 = async () => {
  let post = await getPosts();
  return post == null ? void 0 : post.data;
}, Blog = () => {
  let posts = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(listado_post_default, { posts }) });
}, blogs_default = Blog;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default3,
  links: () => links6,
  meta: () => meta6
});

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/styles/nosotros.css
var nosotros_default2 = "/build/_assets/nosotros-K5KOM4EH.css";

// app/routes/nosotros.jsx
var import_jsx_runtime14 = require("react/jsx-runtime"), meta6 = () => ({
  title: "GuitarLA - Nosotros",
  description: "Venta de guitarras, musica "
}), links6 = () => [
  {
    rel: "stylesheet",
    href: nosotros_default2
  },
  {
    rel: "preload",
    href: nosotros_default,
    as: "image"
  }
], Nosotros = () => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("main", { className: "contenedor nosotros", children: [
  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "heading", children: "Nosotros" }),
  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("img", { src: nosotros_default, alt: "Imagen sobre nosotros" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt officiis blanditiis adipisci earum velit accusamus praesentium, ipsum doloremque qui corrupti quam optio reiciendis suscipit tempora, perspiciatis at assumenda expedita quibusdam? At maxime tempore voluptate unde exercitationem tenetur nihil rerum. Nulla exercitationem voluptate explicabo quia cupiditate sequi sunt inventore modi error, vero ut veritatis, nihil facilis fugit quidem natus officiis tempore. Sapiente sint repellendus accusamus fuga" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius aliquid commodi eligendi at rerum id tenetur? Beatae maxime eaque eum sit hic impedit, vero quibusdam cumque neque expedita iusto illum." })
    ] })
  ] })
] }), nosotros_default3 = Nosotros;

// app/routes/carrito.jsx
var carrito_exports = {};
__export(carrito_exports, {
  default: () => carrito_default2,
  links: () => links7,
  meta: () => meta7
});
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_remix_utils = require("remix-utils");

// app/styles/carrito.css
var carrito_default = "/build/_assets/carrito-DZUONVVE.css";

// app/routes/carrito.jsx
var import_jsx_runtime15 = require("react/jsx-runtime"), meta7 = () => ({
  title: "GuitarLA - Carrito de compras",
  description: "Carrito de compras de GuitarLA"
}), links7 = () => [{ rel: "stylesheet", href: carrito_default }], Carrito = () => {
  let [total, setTotal] = (0, import_react13.useState)(0), { carrito, actualizarCantidad, setCarrito } = (0, import_react14.useOutletContext)();
  (0, import_react13.useEffect)(() => {
    let total2 = carrito.reduce(
      (total3, producto) => total3 + producto.precio * producto.cantidad,
      0
    );
    setTotal(total2);
  }, [carrito]);
  let deleteProduct = (id) => {
    let newCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(newCarrito);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_remix_utils.ClientOnly, { fallback: "loading...", children: () => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { className: "heading", children: "Carrito de compras" }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "carrito", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h2", { children: "Articulos" }),
        (carrito == null ? void 0 : carrito.length) === 0 ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "No hay articulos en el carrito" }) : carrito == null ? void 0 : carrito.map((productos) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "producto", children: [
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("img", { src: productos == null ? void 0 : productos.imagen, alt: productos == null ? void 0 : productos.nombre }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "info", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "nombre", children: productos == null ? void 0 : productos.nombre }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "cantidad", children: "Cantidad: " }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
              "select",
              {
                name: "cantidad",
                id: "cantidad",
                value: productos.cantidad,
                onChange: (e) => actualizarCantidad({
                  id: productos == null ? void 0 : productos.id,
                  cantidad: Number(e.target.value)
                }),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "1", children: "1" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "2", children: "2" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "3", children: "3" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "4", children: "4" }),
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("option", { value: "5", children: "5" })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "precio", children: [
              "Precio: ",
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
                "$",
                productos.precio
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { className: "subtotal", children: [
              "SubTotal :",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("span", { children: [
                "$",
                productos.precio * productos.cantidad
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "buton", onClick: () => deleteProduct(productos.id), children: "Eliminar" })
          ] })
        ] }, productos == null ? void 0 : productos.id))
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("aside", { className: "resumen", children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("h3", { children: "Resumen del pedido" }),
        (carrito == null ? void 0 : carrito.length) === null ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { children: "No hay articulos en el carrito" }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
          "Hay ",
          carrito == null ? void 0 : carrito.length,
          " articulos en el carrito"
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("p", { children: [
          "Total a pagar: $",
          total
        ] })
      ] })
    ] })
  ] }) });
}, carrito_default2 = Carrito;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  links: () => links8,
  loader: () => loader5
});
var import_react15 = require("@remix-run/react");

// app/models/curso.server.js
var getCurso = async () => await (await fetch(
  `${process.env.API_URL}/curso?populate=imagen`
)).json();

// app/components/curso.jsx
var import_jsx_runtime16 = require("react/jsx-runtime"), Curso = ({ curso }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("section", { className: "curso", children: [
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("style", { jsx: "true", children: `
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 /0.8),
                rgb(0 0 0 /0.7)
              ),
               url(${curso.attributes.imagen.data.attributes.url});
          }
        ` }),
  /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "contenedor curso-grid", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "contenido", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "heading", children: curso.attributes.titulo }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("p", { className: "texto", children: curso.attributes.contenido })
  ] }) })
] }), curso_default = Curso;

// app/styles/curso.css
var curso_default2 = "/build/_assets/curso-WMYIETOA.css";

// app/routes/index.jsx
var import_jsx_runtime17 = require("react/jsx-runtime"), links8 = () => [
  { rel: "stylesheet", href: guitarras_default2 },
  { rel: "stylesheet", href: blog_default },
  { rel: "stylesheet", href: curso_default2 }
], loader5 = async () => {
  let [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCurso()]);
  return {
    guitarras: guitarras == null ? void 0 : guitarras.data,
    posts: posts == null ? void 0 : posts.data,
    curso: curso == null ? void 0 : curso.data
  };
}, Index = () => {
  let { guitarras, posts, curso } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_jsx_runtime17.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(listado_guitarras_default, { guitarras }) }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(curso_default, { curso }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("article", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(listado_post_default, { posts }) })
  ] });
}, routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "fda45d31", entry: { module: "/build/entry.client-XYD5DBFY.js", imports: ["/build/_shared/chunk-HK2BMUTF.js", "/build/_shared/chunk-SFIXD4SY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2IO6RF7B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blogs/$postUrl": { id: "routes/blogs/$postUrl", parentId: "root", path: "blogs/:postUrl", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs/$postUrl-54MMKENS.js", imports: ["/build/_shared/chunk-R4TTEQ7Y.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs/index": { id: "routes/blogs/index", parentId: "root", path: "blogs", index: !0, caseSensitive: void 0, module: "/build/routes/blogs/index-55S5CIBS.js", imports: ["/build/_shared/chunk-VDFZIWAM.js", "/build/_shared/chunk-R4TTEQ7Y.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/carrito": { id: "routes/carrito", parentId: "root", path: "carrito", index: void 0, caseSensitive: void 0, module: "/build/routes/carrito-OBT47LGA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/$url": { id: "routes/guitarras/$url", parentId: "root", path: "guitarras/:url", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras/$url-2KEROGXD.js", imports: ["/build/_shared/chunk-GQE6YDE2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras/index": { id: "routes/guitarras/index", parentId: "root", path: "guitarras", index: !0, caseSensitive: void 0, module: "/build/routes/guitarras/index-BLJRAI4V.js", imports: ["/build/_shared/chunk-2DNF6IRH.js", "/build/_shared/chunk-GQE6YDE2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-WFLA22IB.js", imports: ["/build/_shared/chunk-2DNF6IRH.js", "/build/_shared/chunk-GQE6YDE2.js", "/build/_shared/chunk-VDFZIWAM.js", "/build/_shared/chunk-R4TTEQ7Y.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-ZJALEWHV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-FDA45D31.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras/index": {
    id: "routes/guitarras/index",
    parentId: "root",
    path: "guitarras",
    index: !0,
    caseSensitive: void 0,
    module: guitarras_exports
  },
  "routes/blogs/$postUrl": {
    id: "routes/blogs/$postUrl",
    parentId: "root",
    path: "blogs/:postUrl",
    index: void 0,
    caseSensitive: void 0,
    module: postUrl_exports
  },
  "routes/guitarras/$url": {
    id: "routes/guitarras/$url",
    parentId: "root",
    path: "guitarras/:url",
    index: void 0,
    caseSensitive: void 0,
    module: url_exports
  },
  "routes/blogs/index": {
    id: "routes/blogs/index",
    parentId: "root",
    path: "blogs",
    index: !0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/carrito": {
    id: "routes/carrito",
    parentId: "root",
    path: "carrito",
    index: void 0,
    caseSensitive: void 0,
    module: carrito_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
