import { c as createCommonjsModule, a as commonjsGlobal, g as getDefaultExportFromCjs } from '../common/_commonjsHelpers-8c19dec8.js';
import { r as react } from '../common/index-04edb6a1.js';
import { r as reactRouterDom } from '../common/react-router-dom-42c502e1.js';

var btn = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const Btn = ({ children, link, onClick, }) => {
    const className = "btn btn-secondary btn-sm";
    if (link) {
        return (react_1.default.createElement(reactRouterDom.Link, { to: link, type: "button", className: className }, children));
    }
    if (onClick) {
        return (react_1.default.createElement("button", { onClick: onClick, type: "button", className: className }, children));
    }
    throw Error("btn action: either onclick or link must be given");
};
exports.default = Btn;
});

var icon = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// https://fontawesome.com/v4.7.0/icons/
const react_1 = __importDefault(react);
exports.default = ({ name }) => (react_1.default.createElement("i", { className: "fa fa-" + name }));
});

var actions = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BtnEdit = exports.BtnBack = exports.BtnAction = void 0;
const react_1 = __importDefault(react);
const btn_1 = __importDefault(btn);
const icon_1 = __importDefault(icon);
const actionToIcon = (action) => {
    switch (action) {
        case "back":
            return "arrow-left";
        default:
            return action;
    }
};
const actionToText = (action) => {
    switch (action) {
        case "back":
            return "Back";
        case "edit":
            return "Edit";
        default:
            return action;
    }
};
const BtnAction = ({ link, onClick, action, }) => {
    const content = (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(icon_1.default, { name: actionToIcon(action) }),
        " ",
        actionToText(action)));
    return (react_1.default.createElement(btn_1.default, { onClick: onClick, link: link }, content));
};
exports.BtnAction = BtnAction;
const BtnBack = ({ link, onClick }) => (react_1.default.createElement(exports.BtnAction, { action: "back", onClick: onClick, link: link }));
exports.BtnBack = BtnBack;
const BtnEdit = ({ link, onClick, }) => react_1.default.createElement(exports.BtnAction, { action: "edit", onClick: onClick, link: link });
exports.BtnEdit = BtnEdit;
exports.default = exports.BtnAction;
});

var dropdown = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
/**
 * dropdown buttons
 * @see https://getbootstrap.com/docs/4.0/components/dropdowns/#via-data-attributes
 * does not seem to work without JS plugins
 */
exports.default = ({ label, options, }) => {
    return (react_1.default.createElement("div", { className: "dropdown" },
        react_1.default.createElement("button", { className: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, label),
        react_1.default.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" }, options.map((op, i) => (react_1.default.createElement("a", { key: i, className: "dropdown-item", href: "#" }, op.name))))));
};
});

var group = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
exports.default = ({ btns, onClick, selected: pSelected, }) => {
    const [selected, setSelected] = react_1.default.useState(pSelected);
    const [loading, setLoading] = react_1.default.useState(false);
    const handleClick = (v) => {
        onClick(v).then((_res) => {
            setSelected(v);
            setLoading(false);
        });
        setLoading(true);
    };
    return (react_1.default.createElement("div", { className: "btn-group", role: "group" }, btns.map((btn, i) => {
        const className = "btn btn-" + (selected === btn.id ? "primary" : "secondary");
        return (react_1.default.createElement("button", { disabled: loading, key: i, type: "button", className: className, onClick: () => handleClick(btn.id) }, btn.name));
    })));
};
});

var link = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const icon_1 = __importDefault(icon);
const BtnLink = ({ url, label, iconAppend, iconPrepend, }) => (react_1.default.createElement(reactRouterDom.Link, { to: url },
    react_1.default.createElement("button", { className: "btn btn-secondary btn-sm" },
        iconPrepend && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(icon_1.default, { name: iconPrepend }),
            "\u00A0")),
        label,
        iconAppend && (react_1.default.createElement(react_1.default.Fragment, null,
            "\u00A0",
            react_1.default.createElement(icon_1.default, { name: iconAppend }))))));
exports.default = BtnLink;
});

var type$2 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var button = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.Link = exports.Group = exports.Dropdown = exports.Btn = exports.Actions = void 0;
const actions_1 = __importDefault(actions);
exports.Actions = actions_1.default;
const btn_1 = __importDefault(btn);
exports.Btn = btn_1.default;
const dropdown_1 = __importDefault(dropdown);
exports.Dropdown = dropdown_1.default;
const group_1 = __importDefault(group);
exports.Group = group_1.default;
const link_1 = __importDefault(link);
exports.Link = link_1.default;
const Type = __importStar(type$2);
exports.Type = Type;
});

var card = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
const Layout = ({ title, subtitle, children, }) => (react_1.default.createElement("div", { className: "card" },
    react_1.default.createElement("div", { className: "card-body" },
        title && react_1.default.createElement("h5", { className: "card-title" }, title),
        subtitle && (react_1.default.createElement("h6", { className: "card-subtitle mb-2 text-muted" }, subtitle)),
        children)));
exports.default = Layout;
});

var select = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(react);
const getValue = (v) => {
    if (v === "" || v === undefined) {
        return undefined;
    }
    const vn = Number(v);
    if (isNaN(vn)) {
        return v;
    }
    return vn;
};
const Select = ({ options, value, onChange = (v) => console.log(`onChange not yet implemented, selected value: ${v}`), errors, }) => (react_1.default.createElement("select", { className: "form-control" + (errors && errors.length > 0 ? "  is-invalid" : ""), defaultValue: value, onChange: (v) => onChange(getValue(v.target.value)) },
    react_1.default.createElement("option", { value: "" }),
    options.map(({ id, name }, i) => (react_1.default.createElement("option", { key: i, value: id }, name)))));
exports.Select = Select;
exports.default = exports.Select;
});

var text = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputText = void 0;
const react_1 = __importDefault(react);
const InputText = ({ value, onChange, errors, disabled }) => (react_1.default.createElement("input", { className: 'form-control' + (errors && errors.length > 0 ? '  is-invalid' : ''), disabled: disabled, type: "text", value: value || '', onChange: v => v.target.value === '' ? onChange(undefined) : onChange(v.target.value) }));
exports.InputText = InputText;
exports.default = exports.InputText;
});

var number = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputNumber = void 0;
const react_1 = __importDefault(react);
const InputNumber = ({ value, onChange, errors, disabled }) => (react_1.default.createElement("input", { className: 'form-control' + (errors && errors.length > 0 ? '  is-invalid' : ''), disabled: disabled, type: "number", value: value || '', onChange: v => v.target.value === ''
        ? onChange(undefined)
        : onChange(Number(v.target.value)) }));
exports.InputNumber = InputNumber;
exports.default = exports.InputNumber;
});

var input = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Number = exports.Text = void 0;
const text_1 = __importDefault(text);
exports.Text = text_1.default;
const number_1 = __importDefault(number);
exports.Number = number_1.default;
});

var wrapper = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper2 = exports.Wrapper = void 0;
const react_1 = __importDefault(react);
const Wrapper = ({ label, info, children, errors, }) => {
    return (react_1.default.createElement("div", { className: "form-group" },
        react_1.default.createElement("label", null, label),
        children,
        react_1.default.createElement("small", { 
            //id="emailHelp"
            className: "form-text text-muted" }, info),
        errors && (react_1.default.createElement("div", { className: "invalid-feedback" },
            react_1.default.createElement("ul", { className: "list list-unstyled" }, errors.map((e, i) => (react_1.default.createElement("li", { key: i }, e))))))));
};
exports.Wrapper = Wrapper;
const Wrapper2 = ({ label, children, }) => (react_1.default.createElement("div", { className: "col-auto" },
    label && react_1.default.createElement("label", { className: "mr-sm-2" }, label),
    children));
exports.Wrapper2 = Wrapper2;
exports.default = exports.Wrapper;
});

var form$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(react);
const Form = ({ onSubmit, children, }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };
    return (react_1.default.createElement("form", { onSubmit: handleSubmit }, children));
};
exports.Form = Form;
exports.default = exports.Form;
});

var form = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.Wrapper = exports.Input = exports.Select = void 0;
const select_1 = __importDefault(select);
exports.Select = select_1.default;
const Input = __importStar(input);
exports.Input = Input;
const wrapper_1 = __importDefault(wrapper);
exports.Wrapper = wrapper_1.default;
const form_1 = __importDefault(form$1);
exports.Form = form_1.default;
});

var simple = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
const Nav = (navs) => ({ option, onClick, }) => (react_1.default.createElement("ul", { className: "nav nav-tabs" }, navs.map((nav, i) => (react_1.default.createElement("li", { className: "nav-item" },
    react_1.default.createElement("a", { onClick: () => onClick(i), className: `nav-link ${i === option ? "active" : ""}`, href: "#" }, nav.name))))));
exports.default = Nav;
});

var swapComponent = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
const Nav = ({ navs, option = 0, }) => {
    const [selected, setSelected] = react_1.default.useState(option);
    const navSelected = navs[selected];
    if (!navSelected) {
        throw Error("selected item does not exist");
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: "nav nav-tabs" }, navs.map((nav, i) => (react_1.default.createElement("li", { key: i, className: "nav-item" },
            react_1.default.createElement("button", { onClick: () => setSelected(i), className: `btn btn-outline nav-link ${i === selected ? "btn-outline-primary" : ""}` }, nav.name))))),
        navSelected.Component));
};
exports.default = Nav;
});

var utils = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsSelected = exports.toHref = void 0;
const toHref = (l, urlPrefix) => {
    const path = l.link || l.link === "" ? l.link : "/" + l.label.toLowerCase();
    return urlPrefix + path;
};
exports.toHref = toHref;
const getIsSelected = (pathname, path, navs) => {
    // 1 search at current level and see it it matches one of the pat
    const f = navs.find((x) => pathname === x.path);
    if (f) {
        return pathname === path;
    }
    // if not found
    // find all paths that are included in the pathname ( current location)
    const isIncludedArray = navs
        .filter((x) => pathname.includes(x.path))
        // sort by path length, t get the first of the list as the longest path which will be the only one retained
        .sort((a, b) => b.path.length - a.path.length);
    // if array contains more than 0 items
    if (isIncludedArray.length > 0) {
        // check if the first item (longest path) matches the observed path
        return isIncludedArray[0].path === path;
    }
    // if none found, return 0
    return false;
};
exports.getIsSelected = getIsSelected;
});

var wRouter = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);

const U = __importStar(utils);
const Nav = ({ navs }) => (react_1.default.createElement("ul", { className: "nav nav-tabs" }, navs.map((nav, i) => {
    const { pathname } = reactRouterDom.useLocation();
    const isSelected = U.getIsSelected(pathname, nav.path, navs);
    return (react_1.default.createElement("li", { key: i, className: "nav-item" },
        react_1.default.createElement(reactRouterDom.Link, { className: `nav-link ${isSelected ? "active" : ""}`, to: nav.path }, nav.label)));
})));
const Router = ({ navs }) => (react_1.default.createElement(reactRouterDom.Switch, null, navs.map((l, i) => (react_1.default.createElement(reactRouterDom.Route, { key: i, path: l.path, component: l.Component })))));
exports.default = ({ navs, urlPrefix = "", }) => {
    const list = navs.map((x) => {
        const path = U.toHref(x, urlPrefix);
        return { path, ...x };
    });
    // for the router, sort by path length, to start with the longest to the shortest path to avoid path confusion then and no need to use `exact=true`
    // the [...] is needed to avoid interfering with the other components, ie a copy is necessary
    const listRouter = [...list].sort((a, b) => b.path.length - a.path.length);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Nav, { navs: list }),
        react_1.default.createElement(Router, { navs: listRouter })));
};
});

var type$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var tabs = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.WRouter = exports.SwapComponent = exports.Simple = void 0;
const simple_1 = __importDefault(simple);
exports.Simple = simple_1.default;
const swap_component_1 = __importDefault(swapComponent);
exports.SwapComponent = swap_component_1.default;
const w_router_1 = __importDefault(wRouter);
exports.WRouter = w_router_1.default;
const Type = __importStar(type$1);
exports.Type = Type;
});

var loader = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
exports.default = ({ colorContext = "primary", }) => (react_1.default.createElement("div", { className: `spinner-border text-${colorContext}`, role: "status" },
    react_1.default.createElement("span", { className: "sr-only" }, "Loading...")));
});

var progressBar = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(react);
exports.default = ({ value, colorContext, striped = false, animated = false, }) => (react_1.default.createElement("div", { className: `progress` },
    react_1.default.createElement("div", { className: `progress-bar ${striped ? "progress-bar-striped" : ""} ${animated ? "progress-bar-animated" : ""} ${colorContext ? "bg-" + colorContext : ""}`, role: "progressbar", "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100, style: { width: value + "%" } })));
});

var type = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
});

var wLoader = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WLoader = void 0;
const react_1 = __importDefault(react);
const loader_1 = __importDefault(loader);
const WLoader = (Loader) => ({ getData, Component, }) => {
    const [data, setData] = react_1.default.useState(undefined);
    if (data !== undefined) {
        return react_1.default.createElement(Component, { data: data });
    }
    getData().then(setData);
    return react_1.default.createElement(Loader, null);
};
exports.WLoader = WLoader;
exports.default = exports.WLoader(loader_1.default);
});

var dist = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WLoader = exports.Type = exports.ProgressBar = exports.Loader = exports.Icon = exports.Tabs = exports.Form = exports.Card = exports.Buttons = void 0;
const Buttons = __importStar(button);
exports.Buttons = Buttons;
const card_1 = __importDefault(card);
exports.Card = card_1.default;
const Form = __importStar(form);
exports.Form = Form;
const Tabs = __importStar(tabs);
exports.Tabs = Tabs;
const icon_1 = __importDefault(icon);
exports.Icon = icon_1.default;
const loader_1 = __importDefault(loader);
exports.Loader = loader_1.default;
const progress_bar_1 = __importDefault(progressBar);
exports.ProgressBar = progress_bar_1.default;
const Type = __importStar(type);
exports.Type = Type;
const w_loader_1 = __importDefault(wLoader);
exports.WLoader = w_loader_1.default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(dist);

var Buttons = dist.Buttons;
var Card = dist.Card;
var Form = dist.Form;
var Icon = dist.Icon;
var Loader = dist.Loader;
var ProgressBar = dist.ProgressBar;
var Tabs = dist.Tabs;
var Type = dist.Type;
var WLoader = dist.WLoader;
export default __pika_web_default_export_for_treeshaking__;
export { Buttons, Card, Form, Icon, Loader, ProgressBar, Tabs, Type, WLoader, dist as __moduleExports };
