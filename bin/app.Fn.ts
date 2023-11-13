import { Logger } from "@aws-lambda-powertools/logger";

const logger = new Logger();

export const handler = async (_, context: any) => {
  logger.info("without context");
  logger.addContext(context);
  logger.info("with context");
};

// without context
// {
//   "level": "INFO",
//   "message": "without context",
//   "service": "service_undefined",
//   "timestamp": "2023-11-13T13:26:22.120Z",
//   "xray_trace_id": "1-655223fd-6b7a3fa8544f10cb125c5005"
// }

// with context
// {
//   "level": "INFO",
//   "message": "with context",
//   "service": "service_undefined",
//   "timestamp": "2023-11-13T13:26:22.156Z",
//   "xray_trace_id": "1-655223fd-6b7a3fa8544f10cb125c5005",
//   "cold_start": true,
//   "function_arn": "arn:aws:lambda:ap-northeast-1:660782280015:function:play-power-logger-Fn9270CBC0-JCN6LxFQ1V29",
//   "function_memory_size": 128,
//   "function_name": "play-power-logger-Fn9270CBC0-JCN6LxFQ1V29",
//   "function_request_id": "262e1fd7-48a7-43ed-9aec-5c85729dff94",
// }
