// exporting default function don't require the name

export default (req, res, next) => {

    if (!req.session?.passport?.user?._doc?._id) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    if (!req.session.passport.user._doc._id.equals(req.params._id)) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next(); // Only call next() if validation passes
};