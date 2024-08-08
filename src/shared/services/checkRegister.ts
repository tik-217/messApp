export default function checkRegister({
  errorCode,
  alreadyRegistr = "already-in-use",
}: {
  errorCode: string;
  alreadyRegistr?: string;
}) {
  let alreadyIsRegistered = false;

  if (errorCode.includes(alreadyRegistr)) alreadyIsRegistered = true;

  return alreadyIsRegistered;
}
