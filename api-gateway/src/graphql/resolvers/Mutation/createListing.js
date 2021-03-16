import ListingService from "#root/adapters/ListingsService";

const createListingResolver = async(obj, {description, title}, context) => {
    if(!context.res.locals.userSession) {
        throw new Error("Not Logged In!");
    }

    return await ListingService.createListing({description, title});
};

export default createListingResolver;