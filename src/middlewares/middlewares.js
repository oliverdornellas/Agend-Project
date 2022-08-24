//const e = require("connect-flash");

exports.meuMiddleware = (req, res, next) => {
res.locals.errors = req.flash('errors');
res.locals.success = req.flash('success');
res.locals.user = req.session.user;
next();
};

 
exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
    
    next();
};


exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if(!req.session.user) {
        req.flash('errors', 'você precisa fazer login!');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
};




/*module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local';
    next();
};*/
