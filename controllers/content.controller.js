// exports.uploadFile = async (req, res) => {

//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.json({ error: true, errors: errors.array().map(err => err.msg), statusCode: 422, });
//     }

//     console.log(req.body)
//     if (!req.file) {
//         return res.json({
//             error: true,
//             success: false,
//             errors: [
//                 'Please upload cover image.',
//             ],
//             statusCode: 500

//         })
//     }
//     const { description, title, metadata } = req.body


//     Feed.create({ description, title, metadata, image: req.file.path }).then(val => {
//         return res.status(200).json({
//             error: false,
//             success: true,
//             body: val,
//             statusCode: 200
//         })
//     }).catch(err => {
//         res.json({
//             error: true,
//             success: false,
//             errors: [
//                 'Internal Server Error!',
//             ],
//             statusCode: 500

//         })
//     })
// }
