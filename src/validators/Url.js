import Joi from "joi";

export const urlShortenerValidation = Joi.object({
    origUrl: Joi.string().required(),
});