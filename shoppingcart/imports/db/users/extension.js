export default {
    getEmailForUserId(userId) {
        const user = this.findOne(userId, {
            fields: {emails: 1}
        });
        if (!user) {
            throw new Meteor.Error('not-found');
        }
        return user.emails[0].address;
    }
}