import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const create = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const { name } = args;
    await ctx.db.insert("projects", {
      name,
      ownerId: "123",
    });
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("projects").collect();
  },
});
