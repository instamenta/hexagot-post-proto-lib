export namespace PostServiceService {
    namespace createPost {
        export let path: string;
        export let requestStream: boolean;
        export let responseStream: boolean;
        export let requestType: any;
        export let responseType: any;
        export { serialize_post_PostForm as requestSerialize };
        export { deserialize_post_PostForm as requestDeserialize };
        export { serialize_post_PostModel as responseSerialize };
        export { deserialize_post_PostModel as responseDeserialize };
    }
    namespace updatePost {
        let path_1: string;
        export { path_1 as path };
        let requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        let responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        let requestType_1: any;
        export { requestType_1 as requestType };
        let responseType_1: any;
        export { responseType_1 as responseType };
        export { serialize_post_PostForm as requestSerialize };
        export { deserialize_post_PostForm as requestDeserialize };
        export { serialize_post_PostModel as responseSerialize };
        export { deserialize_post_PostModel as responseDeserialize };
    }
    namespace deletePost {
        let path_2: string;
        export { path_2 as path };
        let requestStream_2: boolean;
        export { requestStream_2 as requestStream };
        let responseStream_2: boolean;
        export { responseStream_2 as responseStream };
        let requestType_2: any;
        export { requestType_2 as requestType };
        let responseType_2: typeof google_protobuf_empty_pb.Empty;
        export { responseType_2 as responseType };
        export { serialize_post_DeleteByObjectId as requestSerialize };
        export { deserialize_post_DeleteByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    namespace createComment {
        let path_3: string;
        export { path_3 as path };
        let requestStream_3: boolean;
        export { requestStream_3 as requestStream };
        let responseStream_3: boolean;
        export { responseStream_3 as responseStream };
        let requestType_3: any;
        export { requestType_3 as requestType };
        let responseType_3: any;
        export { responseType_3 as responseType };
        export { serialize_post_CommentForm as requestSerialize };
        export { deserialize_post_CommentForm as requestDeserialize };
        export { serialize_post_CommentModel as responseSerialize };
        export { deserialize_post_CommentModel as responseDeserialize };
    }
    namespace updateComment {
        let path_4: string;
        export { path_4 as path };
        let requestStream_4: boolean;
        export { requestStream_4 as requestStream };
        let responseStream_4: boolean;
        export { responseStream_4 as responseStream };
        let requestType_4: any;
        export { requestType_4 as requestType };
        let responseType_4: any;
        export { responseType_4 as responseType };
        export { serialize_post_CommentForm as requestSerialize };
        export { deserialize_post_CommentForm as requestDeserialize };
        export { serialize_post_CommentModel as responseSerialize };
        export { deserialize_post_CommentModel as responseDeserialize };
    }
    namespace deleteComment {
        let path_5: string;
        export { path_5 as path };
        let requestStream_5: boolean;
        export { requestStream_5 as requestStream };
        let responseStream_5: boolean;
        export { responseStream_5 as responseStream };
        let requestType_5: any;
        export { requestType_5 as requestType };
        let responseType_5: typeof google_protobuf_empty_pb.Empty;
        export { responseType_5 as responseType };
        export { serialize_post_DeleteByObjectId as requestSerialize };
        export { deserialize_post_DeleteByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    namespace getPostById {
        let path_6: string;
        export { path_6 as path };
        let requestStream_6: boolean;
        export { requestStream_6 as requestStream };
        let responseStream_6: boolean;
        export { responseStream_6 as responseStream };
        let requestType_6: any;
        export { requestType_6 as requestType };
        let responseType_6: any;
        export { responseType_6 as responseType };
        export { serialize_post_GetByObjectId as requestSerialize };
        export { deserialize_post_GetByObjectId as requestDeserialize };
        export { serialize_post_PostModel as responseSerialize };
        export { deserialize_post_PostModel as responseDeserialize };
    }
    namespace getPost {
        let path_7: string;
        export { path_7 as path };
        let requestStream_7: boolean;
        export { requestStream_7 as requestStream };
        let responseStream_7: boolean;
        export { responseStream_7 as responseStream };
        let requestType_7: any;
        export { requestType_7 as requestType };
        let responseType_7: any;
        export { responseType_7 as responseType };
        export { serialize_post_GetPostsRequest as requestSerialize };
        export { deserialize_post_GetPostsRequest as requestDeserialize };
        export { serialize_post_PostModel as responseSerialize };
        export { deserialize_post_PostModel as responseDeserialize };
    }
    namespace getPostComments {
        let path_8: string;
        export { path_8 as path };
        let requestStream_8: boolean;
        export { requestStream_8 as requestStream };
        let responseStream_8: boolean;
        export { responseStream_8 as responseStream };
        let requestType_8: any;
        export { requestType_8 as requestType };
        let responseType_8: any;
        export { responseType_8 as responseType };
        export { serialize_post_GetCommentsRequest as requestSerialize };
        export { deserialize_post_GetCommentsRequest as requestDeserialize };
        export { serialize_post_Comments as responseSerialize };
        export { deserialize_post_Comments as responseDeserialize };
    }
    namespace getUserPosts {
        let path_9: string;
        export { path_9 as path };
        let requestStream_9: boolean;
        export { requestStream_9 as requestStream };
        let responseStream_9: boolean;
        export { responseStream_9 as responseStream };
        let requestType_9: any;
        export { requestType_9 as requestType };
        let responseType_9: any;
        export { responseType_9 as responseType };
        export { serialize_post_GetUserPostsRequest as requestSerialize };
        export { deserialize_post_GetUserPostsRequest as requestDeserialize };
        export { serialize_post_PostModel as responseSerialize };
        export { deserialize_post_PostModel as responseDeserialize };
    }
    namespace upvotePost {
        let path_10: string;
        export { path_10 as path };
        let requestStream_10: boolean;
        export { requestStream_10 as requestStream };
        let responseStream_10: boolean;
        export { responseStream_10 as responseStream };
        let requestType_10: any;
        export { requestType_10 as requestType };
        let responseType_10: typeof google_protobuf_empty_pb.Empty;
        export { responseType_10 as responseType };
        export { serialize_post_UpdateByObjectId as requestSerialize };
        export { deserialize_post_UpdateByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    namespace downvotePost {
        let path_11: string;
        export { path_11 as path };
        let requestStream_11: boolean;
        export { requestStream_11 as requestStream };
        let responseStream_11: boolean;
        export { responseStream_11 as responseStream };
        let requestType_11: any;
        export { requestType_11 as requestType };
        let responseType_11: typeof google_protobuf_empty_pb.Empty;
        export { responseType_11 as responseType };
        export { serialize_post_UpdateByObjectId as requestSerialize };
        export { deserialize_post_UpdateByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    namespace upvoteComment {
        let path_12: string;
        export { path_12 as path };
        let requestStream_12: boolean;
        export { requestStream_12 as requestStream };
        let responseStream_12: boolean;
        export { responseStream_12 as responseStream };
        let requestType_12: any;
        export { requestType_12 as requestType };
        let responseType_12: typeof google_protobuf_empty_pb.Empty;
        export { responseType_12 as responseType };
        export { serialize_post_UpdateByObjectId as requestSerialize };
        export { deserialize_post_UpdateByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    namespace downvoteComment {
        let path_13: string;
        export { path_13 as path };
        let requestStream_13: boolean;
        export { requestStream_13 as requestStream };
        let responseStream_13: boolean;
        export { responseStream_13 as responseStream };
        let requestType_13: any;
        export { requestType_13 as requestType };
        let responseType_13: typeof google_protobuf_empty_pb.Empty;
        export { responseType_13 as responseType };
        export { serialize_post_UpdateByObjectId as requestSerialize };
        export { deserialize_post_UpdateByObjectId as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
}
export const PostServiceClient: grpc.ServiceClientConstructor;
declare function serialize_post_PostForm(arg: any): Buffer;
declare function deserialize_post_PostForm(buffer_arg: any): any;
declare function serialize_post_PostModel(arg: any): Buffer;
declare function deserialize_post_PostModel(buffer_arg: any): any;
import google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb.js");
declare function serialize_post_DeleteByObjectId(arg: any): Buffer;
declare function deserialize_post_DeleteByObjectId(buffer_arg: any): any;
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): google_protobuf_empty_pb.Empty;
declare function serialize_post_CommentForm(arg: any): Buffer;
declare function deserialize_post_CommentForm(buffer_arg: any): any;
declare function serialize_post_CommentModel(arg: any): Buffer;
declare function deserialize_post_CommentModel(buffer_arg: any): any;
declare function serialize_post_GetByObjectId(arg: any): Buffer;
declare function deserialize_post_GetByObjectId(buffer_arg: any): any;
declare function serialize_post_GetPostsRequest(arg: any): Buffer;
declare function deserialize_post_GetPostsRequest(buffer_arg: any): any;
declare function serialize_post_GetCommentsRequest(arg: any): Buffer;
declare function deserialize_post_GetCommentsRequest(buffer_arg: any): any;
declare function serialize_post_Comments(arg: any): Buffer;
declare function deserialize_post_Comments(buffer_arg: any): any;
declare function serialize_post_GetUserPostsRequest(arg: any): Buffer;
declare function deserialize_post_GetUserPostsRequest(buffer_arg: any): any;
declare function serialize_post_UpdateByObjectId(arg: any): Buffer;
declare function deserialize_post_UpdateByObjectId(buffer_arg: any): any;
import grpc = require("@grpc/grpc-js");
export {};
//# sourceMappingURL=posts_grpc_pb.d.ts.map