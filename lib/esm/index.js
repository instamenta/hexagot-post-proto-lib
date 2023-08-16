import messages_types from './protos/generated/types/posts_pb';
import service_types from './protos/generated/types/posts_grpc_pb';
module.exports = {
    messages_type: messages_types,
    service_type: service_types,
};
const GRPC_METHODS = {
    messages: require('./protos/generated/posts_pb'),
    service: require('./protos/generated/posts_grpc_pb'),
    messages_type: messages_types,
    service_type: service_types,
};
console.log(GRPC_METHODS);
export default GRPC_METHODS;
