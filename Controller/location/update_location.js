const userModel = require("../../models/User_Teacher");

exports.getUpdateLocations = async (request, response) => {
    try {
        console.log(request.body);

        resp = await userModel.updateOne({ email: request.body.email }, { $set: { Location: request.body.Location }, });
        console.log(resp);
        response.status(200).send({
            success: true,
            error: null
        });

    } catch (error) {
        console.error(error);
        response.status(200).send({
            success: false,
            error: error.message,
        });
    }
}