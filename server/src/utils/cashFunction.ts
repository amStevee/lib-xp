import redisClient from '../config/Redis';


type CacheFuncParams<T> = {
    args: any;
    model: string;
    operation: string;
    query: (args: any) => Promise<T>;
};

async function cachFunc<T>({args, model, operation, query}: CacheFuncParams<T>) {
    // redisClient.flushAll();
    const redisArgs = JSON.stringify({args, model, operation, query});

    const isCached = await redisClient.get(redisArgs);

    if(isCached) return JSON.parse(isCached);

    const result = await query(args)

    redisClient.set(redisArgs, JSON.stringify(result), {EX: 60})

    return result;
}

export default cachFunc;