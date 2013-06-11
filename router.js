function route(handle, pathname, response, request,arguments) {

    if (typeof handle[pathname] === 'function') {
        handle[pathname](response,request,arguments);
    } else {
        console.log("No request handler found for " + pathname);
        response.end();
    }
}
exports.route = route;