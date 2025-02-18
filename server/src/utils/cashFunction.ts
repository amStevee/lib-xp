import {Prisma, PrismaClient} from '@prisma/client';
import redisClient from '../config/Redis';


import { DefaultArgs, DynamicQueryExtensionCbArgs, InternalArgs } from '@prisma/client/runtime/library';

 async function cachFunc<T extends DynamicQueryExtensionCbArgs<Prisma.TypeMap<InternalArgs & DefaultArgs, Prisma.PrismaClientOptions>, "model", string, "findMany">
>({args, model, operation, query}:T) {

    const redisArgs = JSON.stringify({args, model, operation, query});

    const isCached = await redisClient.get(redisArgs);

    if(isCached) return JSON.parse(isCached);

    const result = await query(args)

    redisClient.set(redisArgs, JSON.stringify(result), {EX: 60})

    return result;
}

export default cachFunc;