import {
  titleFont,
  columnContainerStyle,
  columnItemStyle,
} from './labelSettings.css';
import LineLabelSettingsItem, {
  LabelSettingsSectionProps,
} from './LabelValuesSection';

export interface LineLabelSettingsProps {
  /**
   * The items in the LineLabelSettings
   */
  items: LabelSettingsSectionProps[];
  /**
   * Title of the LineLabelSettings
   */
  title?: string;
  /**
   * Column mode?
   */
  column?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const LineLabelSettings = ({
  title,
  items,
  column,
}: LineLabelSettingsProps) => {
  let columnDiv = '';
  let columnContainer = '';
  if (column) {
    columnDiv = columnItemStyle;
    columnContainer = columnContainerStyle;
  }
  return (
    <>
      {title && <div className={titleFont}>{title}</div>}
      <div className={columnContainer}>
        {items &&
          items.map((item) => (
            <div className={columnDiv} key={item.sectionTitle}>
              <LineLabelSettingsItem {...item} />
            </div>
          ))}
      </div>
    </>
  );
};
export default LineLabelSettings;
