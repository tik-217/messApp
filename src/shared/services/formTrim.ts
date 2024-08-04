import { IRegistrValueForm } from "@/shared/types/IRegistrValueForm";
import { ILoginValueFrom } from "@/shared/types/LoginValueForm";

export function formTrim(
  values: IRegistrValueForm<string> | ILoginValueFrom<string>
) {
  type IKey = keyof typeof values;

  for (const key in values) {
    values[key as IKey] = values[key as IKey].trim();
  }
}
