Object.defineProperty(exports,"__esModule",{value:true});function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:true,get:all[name]})}_export(exports,{CustomError:function(){return CustomError},globalErrorHandler:function(){return globalErrorHandler},routeNotFound:function(){return routeNotFound}});const _dotenv=/*#__PURE__*/_interop_require_default(require("dotenv"));function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _define_property(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function _interop_require_default(obj){return obj&&obj.__esModule?obj:{default:obj}}_dotenv.default.config();const routeNotFound=/*#__PURE__*/function(){var _ref=_async_to_generator(function*(req,res,next){const err=new CustomError(`route for ${req.originalUrl} not found`,404);next(err)});return function routeNotFound(req,res,next){return _ref.apply(this,arguments)}}();class CustomError extends Error{constructor(message,statusCode){super(message),_define_property(this,"message",void 0),_define_property(this,"statusCode",void 0),this.message=message,this.statusCode=statusCode;Error.captureStackTrace(this,this.constructor)}}const globalErrorHandler=/*#__PURE__*/function(){var _ref=_async_to_generator(function*(error,req,res,next){error.statusCode=error.statusCode||500;error.status=error.statusCode>=400&&error.statusCode<500?"fail":"error";process.env.NODE_ENV=="production"?res.status(error.statusCode).json({msg:"server error"}):res.status(error.statusCode).json({status:error.status,type:error.name,msg:error.message,stack:error.stack})});return function globalErrorHandler(error,req,res,next){return _ref.apply(this,arguments)}}();