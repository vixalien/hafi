import IonIcon from "@reacticons/ionicons";

export function Icon({ name }: IconProps) {
  return <IonIcon className="icon" name={name as "search"} />;
}

export interface IconProps {
  name: string;
}
