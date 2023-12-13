import { i as we } from '../i18next.O_TauLNA.js';
import { c as x, g as Se } from '../_commonjsHelpers.5-cIlDoe.js';
function Oe(o, e) {
	for (var t = 0; t < e.length; t++) {
		const r = e[t];
		if (typeof r != 'string' && !Array.isArray(r)) {
			for (const i in r)
				if (i !== 'default' && !(i in o)) {
					const s = Object.getOwnPropertyDescriptor(r, i);
					s && Object.defineProperty(o, i, s.get ? s : { enumerable: !0, get: () => r[i] });
				}
		}
	}
	return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }));
}
function H(o) {
	'@babel/helpers - typeof';
	return (
		(H =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  }),
		H(o)
	);
}
var ne = [],
	_e = ne.forEach,
	Ee = ne.slice;
function F(o) {
	return (
		_e.call(Ee.call(arguments, 1), function (e) {
			if (e) for (var t in e) o[t] === void 0 && (o[t] = e[t]);
		}),
		o
	);
}
function oe() {
	return (
		typeof XMLHttpRequest == 'function' ||
		(typeof XMLHttpRequest > 'u' ? 'undefined' : H(XMLHttpRequest)) === 'object'
	);
}
function Te(o) {
	return !!o && typeof o.then == 'function';
}
function Ae(o) {
	return Te(o) ? o : Promise.resolve(o);
}
function Pe(o) {
	throw new Error(
		'Could not dynamically require "' +
			o +
			'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
	);
}
var M = { exports: {} },
	U = { exports: {} },
	G;
function ke() {
	return (
		G ||
			((G = 1),
			(function (o, e) {
				var t =
						(typeof globalThis < 'u' && globalThis) ||
						(typeof self < 'u' && self) ||
						(typeof x < 'u' && x),
					r = (function () {
						function s() {
							(this.fetch = !1), (this.DOMException = t.DOMException);
						}
						return (s.prototype = t), new s();
					})();
				(function (s) {
					(function (f) {
						var u = (typeof s < 'u' && s) || (typeof self < 'u' && self) || (typeof u < 'u' && u),
							c = {
								searchParams: 'URLSearchParams' in u,
								iterable: 'Symbol' in u && 'iterator' in Symbol,
								blob:
									'FileReader' in u &&
									'Blob' in u &&
									(function () {
										try {
											return new Blob(), !0;
										} catch {
											return !1;
										}
									})(),
								formData: 'FormData' in u,
								arrayBuffer: 'ArrayBuffer' in u,
							};
						function w(n) {
							return n && DataView.prototype.isPrototypeOf(n);
						}
						if (c.arrayBuffer)
							var g = [
									'[object Int8Array]',
									'[object Uint8Array]',
									'[object Uint8ClampedArray]',
									'[object Int16Array]',
									'[object Uint16Array]',
									'[object Int32Array]',
									'[object Uint32Array]',
									'[object Float32Array]',
									'[object Float64Array]',
								],
								h =
									ArrayBuffer.isView ||
									function (n) {
										return n && g.indexOf(Object.prototype.toString.call(n)) > -1;
									};
						function v(n) {
							if (
								(typeof n != 'string' && (n = String(n)),
								/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(n) || n === '')
							)
								throw new TypeError('Invalid character in header field name: "' + n + '"');
							return n.toLowerCase();
						}
						function b(n) {
							return typeof n != 'string' && (n = String(n)), n;
						}
						function T(n) {
							var a = {
								next: function () {
									var l = n.shift();
									return { done: l === void 0, value: l };
								},
							};
							return (
								c.iterable &&
									(a[Symbol.iterator] = function () {
										return a;
									}),
								a
							);
						}
						function y(n) {
							(this.map = {}),
								n instanceof y
									? n.forEach(function (a, l) {
											this.append(l, a);
									  }, this)
									: Array.isArray(n)
									? n.forEach(function (a) {
											this.append(a[0], a[1]);
									  }, this)
									: n &&
									  Object.getOwnPropertyNames(n).forEach(function (a) {
											this.append(a, n[a]);
									  }, this);
						}
						(y.prototype.append = function (n, a) {
							(n = v(n)), (a = b(a));
							var l = this.map[n];
							this.map[n] = l ? l + ', ' + a : a;
						}),
							(y.prototype.delete = function (n) {
								delete this.map[v(n)];
							}),
							(y.prototype.get = function (n) {
								return (n = v(n)), this.has(n) ? this.map[n] : null;
							}),
							(y.prototype.has = function (n) {
								return this.map.hasOwnProperty(v(n));
							}),
							(y.prototype.set = function (n, a) {
								this.map[v(n)] = b(a);
							}),
							(y.prototype.forEach = function (n, a) {
								for (var l in this.map)
									this.map.hasOwnProperty(l) && n.call(a, this.map[l], l, this);
							}),
							(y.prototype.keys = function () {
								var n = [];
								return (
									this.forEach(function (a, l) {
										n.push(l);
									}),
									T(n)
								);
							}),
							(y.prototype.values = function () {
								var n = [];
								return (
									this.forEach(function (a) {
										n.push(a);
									}),
									T(n)
								);
							}),
							(y.prototype.entries = function () {
								var n = [];
								return (
									this.forEach(function (a, l) {
										n.push([l, a]);
									}),
									T(n)
								);
							}),
							c.iterable && (y.prototype[Symbol.iterator] = y.prototype.entries);
						function A(n) {
							if (n.bodyUsed) return Promise.reject(new TypeError('Already read'));
							n.bodyUsed = !0;
						}
						function N(n) {
							return new Promise(function (a, l) {
								(n.onload = function () {
									a(n.result);
								}),
									(n.onerror = function () {
										l(n.error);
									});
							});
						}
						function ce(n) {
							var a = new FileReader(),
								l = N(a);
							return a.readAsArrayBuffer(n), l;
						}
						function de(n) {
							var a = new FileReader(),
								l = N(a);
							return a.readAsText(n), l;
						}
						function he(n) {
							for (var a = new Uint8Array(n), l = new Array(a.length), p = 0; p < a.length; p++)
								l[p] = String.fromCharCode(a[p]);
							return l.join('');
						}
						function $(n) {
							if (n.slice) return n.slice(0);
							var a = new Uint8Array(n.byteLength);
							return a.set(new Uint8Array(n)), a.buffer;
						}
						function z() {
							return (
								(this.bodyUsed = !1),
								(this._initBody = function (n) {
									(this.bodyUsed = this.bodyUsed),
										(this._bodyInit = n),
										n
											? typeof n == 'string'
												? (this._bodyText = n)
												: c.blob && Blob.prototype.isPrototypeOf(n)
												? (this._bodyBlob = n)
												: c.formData && FormData.prototype.isPrototypeOf(n)
												? (this._bodyFormData = n)
												: c.searchParams && URLSearchParams.prototype.isPrototypeOf(n)
												? (this._bodyText = n.toString())
												: c.arrayBuffer && c.blob && w(n)
												? ((this._bodyArrayBuffer = $(n.buffer)),
												  (this._bodyInit = new Blob([this._bodyArrayBuffer])))
												: c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(n) || h(n))
												? (this._bodyArrayBuffer = $(n))
												: (this._bodyText = n = Object.prototype.toString.call(n))
											: (this._bodyText = ''),
										this.headers.get('content-type') ||
											(typeof n == 'string'
												? this.headers.set('content-type', 'text/plain;charset=UTF-8')
												: this._bodyBlob && this._bodyBlob.type
												? this.headers.set('content-type', this._bodyBlob.type)
												: c.searchParams &&
												  URLSearchParams.prototype.isPrototypeOf(n) &&
												  this.headers.set(
														'content-type',
														'application/x-www-form-urlencoded;charset=UTF-8'
												  ));
								}),
								c.blob &&
									((this.blob = function () {
										var n = A(this);
										if (n) return n;
										if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
										if (this._bodyArrayBuffer)
											return Promise.resolve(new Blob([this._bodyArrayBuffer]));
										if (this._bodyFormData) throw new Error('could not read FormData body as blob');
										return Promise.resolve(new Blob([this._bodyText]));
									}),
									(this.arrayBuffer = function () {
										if (this._bodyArrayBuffer) {
											var n = A(this);
											return (
												n ||
												(ArrayBuffer.isView(this._bodyArrayBuffer)
													? Promise.resolve(
															this._bodyArrayBuffer.buffer.slice(
																this._bodyArrayBuffer.byteOffset,
																this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
															)
													  )
													: Promise.resolve(this._bodyArrayBuffer))
											);
										} else return this.blob().then(ce);
									})),
								(this.text = function () {
									var n = A(this);
									if (n) return n;
									if (this._bodyBlob) return de(this._bodyBlob);
									if (this._bodyArrayBuffer) return Promise.resolve(he(this._bodyArrayBuffer));
									if (this._bodyFormData) throw new Error('could not read FormData body as text');
									return Promise.resolve(this._bodyText);
								}),
								c.formData &&
									(this.formData = function () {
										return this.text().then(ge);
									}),
								(this.json = function () {
									return this.text().then(JSON.parse);
								}),
								this
							);
						}
						var pe = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
						function ye(n) {
							var a = n.toUpperCase();
							return pe.indexOf(a) > -1 ? a : n;
						}
						function E(n, a) {
							if (!(this instanceof E))
								throw new TypeError(
									'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
								);
							a = a || {};
							var l = a.body;
							if (n instanceof E) {
								if (n.bodyUsed) throw new TypeError('Already read');
								(this.url = n.url),
									(this.credentials = n.credentials),
									a.headers || (this.headers = new y(n.headers)),
									(this.method = n.method),
									(this.mode = n.mode),
									(this.signal = n.signal),
									!l && n._bodyInit != null && ((l = n._bodyInit), (n.bodyUsed = !0));
							} else this.url = String(n);
							if (
								((this.credentials = a.credentials || this.credentials || 'same-origin'),
								(a.headers || !this.headers) && (this.headers = new y(a.headers)),
								(this.method = ye(a.method || this.method || 'GET')),
								(this.mode = a.mode || this.mode || null),
								(this.signal = a.signal || this.signal),
								(this.referrer = null),
								(this.method === 'GET' || this.method === 'HEAD') && l)
							)
								throw new TypeError('Body not allowed for GET or HEAD requests');
							if (
								(this._initBody(l),
								(this.method === 'GET' || this.method === 'HEAD') &&
									(a.cache === 'no-store' || a.cache === 'no-cache'))
							) {
								var p = /([?&])_=[^&]*/;
								if (p.test(this.url)) this.url = this.url.replace(p, '$1_=' + new Date().getTime());
								else {
									var m = /\?/;
									this.url += (m.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
								}
							}
						}
						E.prototype.clone = function () {
							return new E(this, { body: this._bodyInit });
						};
						function ge(n) {
							var a = new FormData();
							return (
								n
									.trim()
									.split('&')
									.forEach(function (l) {
										if (l) {
											var p = l.split('='),
												m = p.shift().replace(/\+/g, ' '),
												d = p.join('=').replace(/\+/g, ' ');
											a.append(decodeURIComponent(m), decodeURIComponent(d));
										}
									}),
								a
							);
						}
						function me(n) {
							var a = new y(),
								l = n.replace(/\r?\n[\t ]+/g, ' ');
							return (
								l
									.split('\r')
									.map(function (p) {
										return p.indexOf(`
`) === 0
											? p.substr(1, p.length)
											: p;
									})
									.forEach(function (p) {
										var m = p.split(':'),
											d = m.shift().trim();
										if (d) {
											var B = m.join(':').trim();
											a.append(d, B);
										}
									}),
								a
							);
						}
						z.call(E.prototype);
						function O(n, a) {
							if (!(this instanceof O))
								throw new TypeError(
									'Please use the "new" operator, this DOM object constructor cannot be called as a function.'
								);
							a || (a = {}),
								(this.type = 'default'),
								(this.status = a.status === void 0 ? 200 : a.status),
								(this.ok = this.status >= 200 && this.status < 300),
								(this.statusText = a.statusText === void 0 ? '' : '' + a.statusText),
								(this.headers = new y(a.headers)),
								(this.url = a.url || ''),
								this._initBody(n);
						}
						z.call(O.prototype),
							(O.prototype.clone = function () {
								return new O(this._bodyInit, {
									status: this.status,
									statusText: this.statusText,
									headers: new y(this.headers),
									url: this.url,
								});
							}),
							(O.error = function () {
								var n = new O(null, { status: 0, statusText: '' });
								return (n.type = 'error'), n;
							});
						var ve = [301, 302, 303, 307, 308];
						(O.redirect = function (n, a) {
							if (ve.indexOf(a) === -1) throw new RangeError('Invalid status code');
							return new O(null, { status: a, headers: { location: n } });
						}),
							(f.DOMException = u.DOMException);
						try {
							new f.DOMException();
						} catch {
							(f.DOMException = function (a, l) {
								(this.message = a), (this.name = l);
								var p = Error(a);
								this.stack = p.stack;
							}),
								(f.DOMException.prototype = Object.create(Error.prototype)),
								(f.DOMException.prototype.constructor = f.DOMException);
						}
						function C(n, a) {
							return new Promise(function (l, p) {
								var m = new E(n, a);
								if (m.signal && m.signal.aborted)
									return p(new f.DOMException('Aborted', 'AbortError'));
								var d = new XMLHttpRequest();
								function B() {
									d.abort();
								}
								(d.onload = function () {
									var S = {
										status: d.status,
										statusText: d.statusText,
										headers: me(d.getAllResponseHeaders() || ''),
									};
									S.url = 'responseURL' in d ? d.responseURL : S.headers.get('X-Request-URL');
									var R = 'response' in d ? d.response : d.responseText;
									setTimeout(function () {
										l(new O(R, S));
									}, 0);
								}),
									(d.onerror = function () {
										setTimeout(function () {
											p(new TypeError('Network request failed'));
										}, 0);
									}),
									(d.ontimeout = function () {
										setTimeout(function () {
											p(new TypeError('Network request failed'));
										}, 0);
									}),
									(d.onabort = function () {
										setTimeout(function () {
											p(new f.DOMException('Aborted', 'AbortError'));
										}, 0);
									});
								function be(S) {
									try {
										return S === '' && u.location.href ? u.location.href : S;
									} catch {
										return S;
									}
								}
								d.open(m.method, be(m.url), !0),
									m.credentials === 'include'
										? (d.withCredentials = !0)
										: m.credentials === 'omit' && (d.withCredentials = !1),
									'responseType' in d &&
										(c.blob
											? (d.responseType = 'blob')
											: c.arrayBuffer &&
											  m.headers.get('Content-Type') &&
											  m.headers.get('Content-Type').indexOf('application/octet-stream') !== -1 &&
											  (d.responseType = 'arraybuffer')),
									a && typeof a.headers == 'object' && !(a.headers instanceof y)
										? Object.getOwnPropertyNames(a.headers).forEach(function (S) {
												d.setRequestHeader(S, b(a.headers[S]));
										  })
										: m.headers.forEach(function (S, R) {
												d.setRequestHeader(R, S);
										  }),
									m.signal &&
										(m.signal.addEventListener('abort', B),
										(d.onreadystatechange = function () {
											d.readyState === 4 && m.signal.removeEventListener('abort', B);
										})),
									d.send(typeof m._bodyInit > 'u' ? null : m._bodyInit);
							});
						}
						return (
							(C.polyfill = !0),
							u.fetch || ((u.fetch = C), (u.Headers = y), (u.Request = E), (u.Response = O)),
							(f.Headers = y),
							(f.Request = E),
							(f.Response = O),
							(f.fetch = C),
							f
						);
					})({});
				})(r),
					(r.fetch.ponyfill = !0),
					delete r.fetch.polyfill;
				var i = t.fetch ? t : r;
				(e = i.fetch),
					(e.default = i.fetch),
					(e.fetch = i.fetch),
					(e.Headers = i.Headers),
					(e.Request = i.Request),
					(e.Response = i.Response),
					(o.exports = e);
			})(U, U.exports)),
		U.exports
	);
}
(function (o, e) {
	var t;
	if (
		(typeof fetch == 'function' &&
			(typeof x < 'u' && x.fetch
				? (t = x.fetch)
				: typeof window < 'u' && window.fetch
				? (t = window.fetch)
				: (t = fetch)),
		typeof Pe < 'u' && (typeof window > 'u' || typeof window.document > 'u'))
	) {
		var r = t || ke();
		r.default && (r = r.default), (e.default = r), (o.exports = e.default);
	}
})(M, M.exports);
var ie = M.exports;
const ae = Se(ie),
	V = Oe({ __proto__: null, default: ae }, [ie]);
function j(o) {
	'@babel/helpers - typeof';
	return (
		(j =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  }),
		j(o)
	);
}
var _;
typeof fetch == 'function' &&
	(typeof global < 'u' && global.fetch
		? (_ = global.fetch)
		: typeof window < 'u' && window.fetch
		? (_ = window.fetch)
		: (_ = fetch));
var D;
oe() &&
	(typeof global < 'u' && global.XMLHttpRequest
		? (D = global.XMLHttpRequest)
		: typeof window < 'u' && window.XMLHttpRequest && (D = window.XMLHttpRequest));
var I;
typeof ActiveXObject == 'function' &&
	(typeof global < 'u' && global.ActiveXObject
		? (I = global.ActiveXObject)
		: typeof window < 'u' && window.ActiveXObject && (I = window.ActiveXObject));
!_ && V && !D && !I && (_ = ae || V);
typeof _ != 'function' && (_ = void 0);
var X = function (e, t) {
		if (t && j(t) === 'object') {
			var r = '';
			for (var i in t) r += '&' + encodeURIComponent(i) + '=' + encodeURIComponent(t[i]);
			if (!r) return e;
			e = e + (e.indexOf('?') !== -1 ? '&' : '?') + r.slice(1);
		}
		return e;
	},
	W = function (e, t, r) {
		var i = function (f) {
			if (!f.ok) return r(f.statusText || 'Error', { status: f.status });
			f.text()
				.then(function (u) {
					r(null, { status: f.status, data: u });
				})
				.catch(r);
		};
		typeof fetch == 'function' ? fetch(e, t).then(i).catch(r) : _(e, t).then(i).catch(r);
	},
	Q = !1,
	xe = function (e, t, r, i) {
		e.queryStringParams && (t = X(t, e.queryStringParams));
		var s = F({}, typeof e.customHeaders == 'function' ? e.customHeaders() : e.customHeaders);
		typeof window > 'u' &&
			typeof global < 'u' &&
			typeof global.process < 'u' &&
			global.process.versions &&
			global.process.versions.node &&
			(s['User-Agent'] = 'i18next-http-backend (node/'
				.concat(global.process.version, '; ')
				.concat(global.process.platform, ' ')
				.concat(global.process.arch, ')')),
			r && (s['Content-Type'] = 'application/json');
		var f = typeof e.requestOptions == 'function' ? e.requestOptions(r) : e.requestOptions,
			u = F(
				{ method: r ? 'POST' : 'GET', body: r ? e.stringify(r) : void 0, headers: s },
				Q ? {} : f
			);
		try {
			W(t, u, i);
		} catch (c) {
			if (
				!f ||
				Object.keys(f).length === 0 ||
				!c.message ||
				c.message.indexOf('not implemented') < 0
			)
				return i(c);
			try {
				Object.keys(f).forEach(function (w) {
					delete u[w];
				}),
					W(t, u, i),
					(Q = !0);
			} catch (w) {
				i(w);
			}
		}
	},
	De = function (e, t, r, i) {
		r && j(r) === 'object' && (r = X('', r).slice(1)),
			e.queryStringParams && (t = X(t, e.queryStringParams));
		try {
			var s;
			D ? (s = new D()) : (s = new I('MSXML2.XMLHTTP.3.0')),
				s.open(r ? 'POST' : 'GET', t, 1),
				e.crossDomain || s.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
				(s.withCredentials = !!e.withCredentials),
				r && s.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
				s.overrideMimeType && s.overrideMimeType('application/json');
			var f = e.customHeaders;
			if (((f = typeof f == 'function' ? f() : f), f)) for (var u in f) s.setRequestHeader(u, f[u]);
			(s.onreadystatechange = function () {
				s.readyState > 3 &&
					i(s.status >= 400 ? s.statusText : null, { status: s.status, data: s.responseText });
			}),
				s.send(r);
		} catch (c) {
			console && console.log(c);
		}
	},
	qe = function (e, t, r, i) {
		if (
			(typeof r == 'function' && ((i = r), (r = void 0)),
			(i = i || function () {}),
			_ && t.indexOf('file:') !== 0)
		)
			return xe(e, t, r, i);
		if (oe() || typeof ActiveXObject == 'function') return De(e, t, r, i);
		i(new Error('No fetch and no xhr implementation found!'));
	};
function q(o) {
	'@babel/helpers - typeof';
	return (
		(q =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  }),
		q(o)
	);
}
function Le(o, e) {
	if (!(o instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function J(o, e) {
	for (var t = 0; t < e.length; t++) {
		var r = e[t];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(o, se(r.key), r);
	}
}
function Be(o, e, t) {
	return (
		e && J(o.prototype, e), t && J(o, t), Object.defineProperty(o, 'prototype', { writable: !1 }), o
	);
}
function Re(o, e, t) {
	return (
		(e = se(e)),
		e in o
			? Object.defineProperty(o, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
			: (o[e] = t),
		o
	);
}
function se(o) {
	var e = Ue(o, 'string');
	return q(e) === 'symbol' ? e : String(e);
}
function Ue(o, e) {
	if (q(o) !== 'object' || o === null) return o;
	var t = o[Symbol.toPrimitive];
	if (t !== void 0) {
		var r = t.call(o, e || 'default');
		if (q(r) !== 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (e === 'string' ? String : Number)(o);
}
var je = function () {
		return {
			loadPath: '/locales/{{lng}}/{{ns}}.json',
			addPath: '/locales/add/{{lng}}/{{ns}}',
			parse: function (t) {
				return JSON.parse(t);
			},
			stringify: JSON.stringify,
			parsePayload: function (t, r, i) {
				return Re({}, r, i || '');
			},
			parseLoadPayload: function (t, r) {},
			request: qe,
			reloadInterval: typeof window < 'u' ? !1 : 60 * 60 * 1e3,
			customHeaders: {},
			queryStringParams: {},
			crossDomain: !1,
			withCredentials: !1,
			overrideMimeType: !1,
			requestOptions: { mode: 'cors', credentials: 'same-origin', cache: 'default' },
		};
	},
	fe = (function () {
		function o(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
				r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
			Le(this, o),
				(this.services = e),
				(this.options = t),
				(this.allOptions = r),
				(this.type = 'backend'),
				this.init(e, t, r);
		}
		return (
			Be(o, [
				{
					key: 'init',
					value: function (t) {
						var r = this,
							i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
							s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
						(this.services = t),
							(this.options = F(i, this.options || {}, je())),
							(this.allOptions = s),
							this.services &&
								this.options.reloadInterval &&
								setInterval(function () {
									return r.reload();
								}, this.options.reloadInterval);
					},
				},
				{
					key: 'readMulti',
					value: function (t, r, i) {
						this._readAny(t, t, r, r, i);
					},
				},
				{
					key: 'read',
					value: function (t, r, i) {
						this._readAny([t], t, [r], r, i);
					},
				},
				{
					key: '_readAny',
					value: function (t, r, i, s, f) {
						var u = this,
							c = this.options.loadPath;
						typeof this.options.loadPath == 'function' && (c = this.options.loadPath(t, i)),
							(c = Ae(c)),
							c.then(function (w) {
								if (!w) return f(null, {});
								var g = u.services.interpolator.interpolate(w, {
									lng: t.join('+'),
									ns: i.join('+'),
								});
								u.loadUrl(g, f, r, s);
							});
					},
				},
				{
					key: 'loadUrl',
					value: function (t, r, i, s) {
						var f = this,
							u = typeof i == 'string' ? [i] : i,
							c = typeof s == 'string' ? [s] : s,
							w = this.options.parseLoadPayload(u, c);
						this.options.request(this.options, t, w, function (g, h) {
							if (h && ((h.status >= 500 && h.status < 600) || !h.status))
								return r('failed loading ' + t + '; status code: ' + h.status, !0);
							if (h && h.status >= 400 && h.status < 500)
								return r('failed loading ' + t + '; status code: ' + h.status, !1);
							if (!h && g && g.message && g.message.indexOf('Failed to fetch') > -1)
								return r('failed loading ' + t + ': ' + g.message, !0);
							if (g) return r(g, !1);
							var v, b;
							try {
								typeof h.data == 'string' ? (v = f.options.parse(h.data, i, s)) : (v = h.data);
							} catch {
								b = 'failed parsing ' + t + ' to json';
							}
							if (b) return r(b, !1);
							r(null, v);
						});
					},
				},
				{
					key: 'create',
					value: function (t, r, i, s, f) {
						var u = this;
						if (this.options.addPath) {
							typeof t == 'string' && (t = [t]);
							var c = this.options.parsePayload(r, i, s),
								w = 0,
								g = [],
								h = [];
							t.forEach(function (v) {
								var b = u.options.addPath;
								typeof u.options.addPath == 'function' && (b = u.options.addPath(v, r));
								var T = u.services.interpolator.interpolate(b, { lng: v, ns: r });
								u.options.request(u.options, T, c, function (y, A) {
									(w += 1),
										g.push(y),
										h.push(A),
										w === t.length && typeof f == 'function' && f(g, h);
								});
							});
						}
					},
				},
				{
					key: 'reload',
					value: function () {
						var t = this,
							r = this.services,
							i = r.backendConnector,
							s = r.languageUtils,
							f = r.logger,
							u = i.language;
						if (!(u && u.toLowerCase() === 'cimode')) {
							var c = [],
								w = function (h) {
									var v = s.toResolveHierarchy(h);
									v.forEach(function (b) {
										c.indexOf(b) < 0 && c.push(b);
									});
								};
							w(u),
								this.allOptions.preload &&
									this.allOptions.preload.forEach(function (g) {
										return w(g);
									}),
								c.forEach(function (g) {
									t.allOptions.ns.forEach(function (h) {
										i.read(g, h, 'read', null, null, function (v, b) {
											v &&
												f.warn(
													'loading namespace '.concat(h, ' for language ').concat(g, ' failed'),
													v
												),
												!v &&
													b &&
													f.log('loaded namespace '.concat(h, ' for language ').concat(g), b),
												i.loaded(''.concat(g, '|').concat(h), v, b);
										});
									});
								});
						}
					},
				},
			]),
			o
		);
	})();
fe.type = 'backend';
function Ie(o, e) {
	if (!(o instanceof e)) throw new TypeError('Cannot call a class as a function');
}
function L(o) {
	'@babel/helpers - typeof';
	return (
		(L =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  }),
		L(o)
	);
}
function Ce(o, e) {
	if (L(o) !== 'object' || o === null) return o;
	var t = o[Symbol.toPrimitive];
	if (t !== void 0) {
		var r = t.call(o, e || 'default');
		if (L(r) !== 'object') return r;
		throw new TypeError('@@toPrimitive must return a primitive value.');
	}
	return (e === 'string' ? String : Number)(o);
}
function He(o) {
	var e = Ce(o, 'string');
	return L(e) === 'symbol' ? e : String(e);
}
function K(o, e) {
	for (var t = 0; t < e.length; t++) {
		var r = e[t];
		(r.enumerable = r.enumerable || !1),
			(r.configurable = !0),
			'value' in r && (r.writable = !0),
			Object.defineProperty(o, He(r.key), r);
	}
}
function Fe(o, e, t) {
	return (
		e && K(o.prototype, e), t && K(o, t), Object.defineProperty(o, 'prototype', { writable: !1 }), o
	);
}
var ue = [],
	Me = ue.forEach,
	Xe = ue.slice;
function Ne(o) {
	return (
		Me.call(Xe.call(arguments, 1), function (e) {
			if (e) for (var t in e) o[t] === void 0 && (o[t] = e[t]);
		}),
		o
	);
}
var Z = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
	$e = function (e, t, r) {
		var i = r || {};
		i.path = i.path || '/';
		var s = encodeURIComponent(t),
			f = ''.concat(e, '=').concat(s);
		if (i.maxAge > 0) {
			var u = i.maxAge - 0;
			if (Number.isNaN(u)) throw new Error('maxAge should be a Number');
			f += '; Max-Age='.concat(Math.floor(u));
		}
		if (i.domain) {
			if (!Z.test(i.domain)) throw new TypeError('option domain is invalid');
			f += '; Domain='.concat(i.domain);
		}
		if (i.path) {
			if (!Z.test(i.path)) throw new TypeError('option path is invalid');
			f += '; Path='.concat(i.path);
		}
		if (i.expires) {
			if (typeof i.expires.toUTCString != 'function')
				throw new TypeError('option expires is invalid');
			f += '; Expires='.concat(i.expires.toUTCString());
		}
		if ((i.httpOnly && (f += '; HttpOnly'), i.secure && (f += '; Secure'), i.sameSite)) {
			var c = typeof i.sameSite == 'string' ? i.sameSite.toLowerCase() : i.sameSite;
			switch (c) {
				case !0:
					f += '; SameSite=Strict';
					break;
				case 'lax':
					f += '; SameSite=Lax';
					break;
				case 'strict':
					f += '; SameSite=Strict';
					break;
				case 'none':
					f += '; SameSite=None';
					break;
				default:
					throw new TypeError('option sameSite is invalid');
			}
		}
		return f;
	},
	Y = {
		create: function (e, t, r, i) {
			var s =
				arguments.length > 4 && arguments[4] !== void 0
					? arguments[4]
					: { path: '/', sameSite: 'strict' };
			r && ((s.expires = new Date()), s.expires.setTime(s.expires.getTime() + r * 60 * 1e3)),
				i && (s.domain = i),
				(document.cookie = $e(e, encodeURIComponent(t), s));
		},
		read: function (e) {
			for (var t = ''.concat(e, '='), r = document.cookie.split(';'), i = 0; i < r.length; i++) {
				for (var s = r[i]; s.charAt(0) === ' '; ) s = s.substring(1, s.length);
				if (s.indexOf(t) === 0) return s.substring(t.length, s.length);
			}
			return null;
		},
		remove: function (e) {
			this.create(e, '', -1);
		},
	},
	ze = {
		name: 'cookie',
		lookup: function (e) {
			var t;
			if (e.lookupCookie && typeof document < 'u') {
				var r = Y.read(e.lookupCookie);
				r && (t = r);
			}
			return t;
		},
		cacheUserLanguage: function (e, t) {
			t.lookupCookie &&
				typeof document < 'u' &&
				Y.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
		},
	},
	Ge = {
		name: 'querystring',
		lookup: function (e) {
			var t;
			if (typeof window < 'u') {
				var r = window.location.search;
				!window.location.search &&
					window.location.hash &&
					window.location.hash.indexOf('?') > -1 &&
					(r = window.location.hash.substring(window.location.hash.indexOf('?')));
				for (var i = r.substring(1), s = i.split('&'), f = 0; f < s.length; f++) {
					var u = s[f].indexOf('=');
					if (u > 0) {
						var c = s[f].substring(0, u);
						c === e.lookupQuerystring && (t = s[f].substring(u + 1));
					}
				}
			}
			return t;
		},
	},
	P = null,
	ee = function () {
		if (P !== null) return P;
		try {
			P = window !== 'undefined' && window.localStorage !== null;
			var e = 'i18next.translate.boo';
			window.localStorage.setItem(e, 'foo'), window.localStorage.removeItem(e);
		} catch {
			P = !1;
		}
		return P;
	},
	Ve = {
		name: 'localStorage',
		lookup: function (e) {
			var t;
			if (e.lookupLocalStorage && ee()) {
				var r = window.localStorage.getItem(e.lookupLocalStorage);
				r && (t = r);
			}
			return t;
		},
		cacheUserLanguage: function (e, t) {
			t.lookupLocalStorage && ee() && window.localStorage.setItem(t.lookupLocalStorage, e);
		},
	},
	k = null,
	te = function () {
		if (k !== null) return k;
		try {
			k = window !== 'undefined' && window.sessionStorage !== null;
			var e = 'i18next.translate.boo';
			window.sessionStorage.setItem(e, 'foo'), window.sessionStorage.removeItem(e);
		} catch {
			k = !1;
		}
		return k;
	},
	We = {
		name: 'sessionStorage',
		lookup: function (e) {
			var t;
			if (e.lookupSessionStorage && te()) {
				var r = window.sessionStorage.getItem(e.lookupSessionStorage);
				r && (t = r);
			}
			return t;
		},
		cacheUserLanguage: function (e, t) {
			t.lookupSessionStorage && te() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
		},
	},
	Qe = {
		name: 'navigator',
		lookup: function (e) {
			var t = [];
			if (typeof navigator < 'u') {
				if (navigator.languages)
					for (var r = 0; r < navigator.languages.length; r++) t.push(navigator.languages[r]);
				navigator.userLanguage && t.push(navigator.userLanguage),
					navigator.language && t.push(navigator.language);
			}
			return t.length > 0 ? t : void 0;
		},
	},
	Je = {
		name: 'htmlTag',
		lookup: function (e) {
			var t,
				r = e.htmlTag || (typeof document < 'u' ? document.documentElement : null);
			return r && typeof r.getAttribute == 'function' && (t = r.getAttribute('lang')), t;
		},
	},
	Ke = {
		name: 'path',
		lookup: function (e) {
			var t;
			if (typeof window < 'u') {
				var r = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
				if (r instanceof Array)
					if (typeof e.lookupFromPathIndex == 'number') {
						if (typeof r[e.lookupFromPathIndex] != 'string') return;
						t = r[e.lookupFromPathIndex].replace('/', '');
					} else t = r[0].replace('/', '');
			}
			return t;
		},
	},
	Ze = {
		name: 'subdomain',
		lookup: function (e) {
			var t = typeof e.lookupFromSubdomainIndex == 'number' ? e.lookupFromSubdomainIndex + 1 : 1,
				r =
					typeof window < 'u' &&
					window.location &&
					window.location.hostname &&
					window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
			if (r) return r[t];
		},
	};
function Ye() {
	return {
		order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
		lookupQuerystring: 'lng',
		lookupCookie: 'i18next',
		lookupLocalStorage: 'i18nextLng',
		lookupSessionStorage: 'i18nextLng',
		caches: ['localStorage'],
		excludeCacheFor: ['cimode'],
		convertDetectedLanguage: function (e) {
			return e;
		},
	};
}
var le = (function () {
	function o(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
		Ie(this, o), (this.type = 'languageDetector'), (this.detectors = {}), this.init(e, t);
	}
	return (
		Fe(o, [
			{
				key: 'init',
				value: function (t) {
					var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
						i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
					(this.services = t || { languageUtils: {} }),
						(this.options = Ne(r, this.options || {}, Ye())),
						typeof this.options.convertDetectedLanguage == 'string' &&
							this.options.convertDetectedLanguage.indexOf('15897') > -1 &&
							(this.options.convertDetectedLanguage = function (s) {
								return s.replace('-', '_');
							}),
						this.options.lookupFromUrlIndex &&
							(this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
						(this.i18nOptions = i),
						this.addDetector(ze),
						this.addDetector(Ge),
						this.addDetector(Ve),
						this.addDetector(We),
						this.addDetector(Qe),
						this.addDetector(Je),
						this.addDetector(Ke),
						this.addDetector(Ze);
				},
			},
			{
				key: 'addDetector',
				value: function (t) {
					this.detectors[t.name] = t;
				},
			},
			{
				key: 'detect',
				value: function (t) {
					var r = this;
					t || (t = this.options.order);
					var i = [];
					return (
						t.forEach(function (s) {
							if (r.detectors[s]) {
								var f = r.detectors[s].lookup(r.options);
								f && typeof f == 'string' && (f = [f]), f && (i = i.concat(f));
							}
						}),
						(i = i.map(function (s) {
							return r.options.convertDetectedLanguage(s);
						})),
						this.services.languageUtils.getBestMatchFromCodes ? i : i.length > 0 ? i[0] : null
					);
				},
			},
			{
				key: 'cacheUserLanguage',
				value: function (t, r) {
					var i = this;
					r || (r = this.options.caches),
						r &&
							((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(t) > -1) ||
								r.forEach(function (s) {
									i.detectors[s] && i.detectors[s].cacheUserLanguage(t, i.options);
								}));
				},
			},
		]),
		o
	);
})();
le.type = 'languageDetector';
const et =
		/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
	tt = {
		'&amp;': '&',
		'&#38;': '&',
		'&lt;': '<',
		'&#60;': '<',
		'&gt;': '>',
		'&#62;': '>',
		'&apos;': "'",
		'&#39;': "'",
		'&quot;': '"',
		'&#34;': '"',
		'&nbsp;': ' ',
		'&#160;': ' ',
		'&copy;': '©',
		'&#169;': '©',
		'&reg;': '®',
		'&#174;': '®',
		'&hellip;': '…',
		'&#8230;': '…',
		'&#x2F;': '/',
		'&#47;': '/',
	},
	rt = (o) => tt[o],
	nt = (o) => o.replace(et, rt);
let re = {
	bindI18n: 'languageChanged',
	bindI18nStore: '',
	transEmptyNodeValue: '',
	transSupportBasicHtmlNodes: !0,
	transWrapTextNodes: '',
	transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
	useSuspense: !0,
	unescape: nt,
};
function ot() {
	let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	re = { ...re, ...o };
}
const it = {
	type: '3rdParty',
	init(o) {
		ot(o.options.react);
	},
};
we.use(fe)
	.use(le)
	.use(it)
	.init({
		supportedLngs: ['es', 'en'],
		fallbackLng: ['es', 'en'],
		ns: 'translation',
		defaultNS: 'translation',
		detection: { order: ['htmlTag'], caches: [] },
		backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
	});
