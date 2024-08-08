export default function checkTwoStrings({
  errorCode,
  errorType,
}: {
  errorCode: string;
  errorType: string;
}) {
  let isEqual = false;

  if (errorCode.includes(errorType)) isEqual = true;

  return isEqual;
}
