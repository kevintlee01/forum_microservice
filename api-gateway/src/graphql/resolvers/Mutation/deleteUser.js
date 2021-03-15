import UsersService from "#root/adapters/UsersService";

const deleteUserResolver = async(obj, {userId}, context) => {
    await UsersService.deleteUser({userId});

    return true;
};

export default deleteUserResolver;