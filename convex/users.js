import { mutation } from "./_generated/server";
import { v } from 'convex/values';

export const CreateUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        picture: v.string(),
        uid: v.string()
    },
    handler: async (ctx, args) => {
        // Check if user already exists 
        const user = await ctx.db.query('users').filter((q) => q.eq(q.field('email'), args.email)).collect();
        console.log('Existing users:', user);
        
        // If user doesn't exist, create new user
        if (user?.length == 0) {
            const result = await ctx.db.insert('users', {
                name: args.name,
                picture: args.picture,
                email: args.email,
                uid: args.uid
            });
            console.log('New user created:', result);
            return result; // Return the new user ID
        } else {
            console.log('User already exists');
            return user[0]; // Return the existing user
        }
    }
});