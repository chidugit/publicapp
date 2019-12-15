import {Meteor} from "meteor/meteor"
import UserSchema from "./schema"
import _ from "underscore"
import UserExtension from "./extension"

const Users = Meteor.users;
Users.attachSchema(UserSchema);
Users.attachBehaviour("timestampable");
_.extend(Users, UserExtension);

export default Users;
