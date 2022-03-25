import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

// Constants
import Images from '../../constants/Images';

const { icons } = Images;

const Icon: any = styled(ReactSVG)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    span {
        display: flex;
    }
`;

export const AngleDownIcon: any = (props: any) => {
    return (
        <Icon src={icons.angle_down} wrapper={'span'} className={props.styles} />
    )
}

export const BorderRadiusIcon: any = (props: any) => {
    return (
        <Icon src={icons.border_radius} wrapper={'span'} className={props.styles} />
    )
}

export const BrandIcon: any = (props: any) => {
    return (
        <Icon src={icons.brand} wrapper={'span'} className={props.styles} />
    )
}

export const FilterIcon: any = (props: any) => {
    return (
        <Icon src={icons.filter} wrapper={'span'} className={props.styles} />
    )
}

export const MarginBottomIcon: any = (props: any) => {
    return (
        <Icon src={icons.margin_bottom} wrapper={'span'} className={props.styles} />
    )
}

export const MarginLeftIcon: any = (props: any) => {
    return (
        <Icon src={icons.margin_left} wrapper={'span'} className={props.styles} />
    )
}

export const MarginRightIcon: any = (props: any) => {
    return (
        <Icon src={icons.margin_right} wrapper={'span'} className={props.styles} />
    )
}

export const MarginTopIcon: any = (props: any) => {
    return (
        <Icon src={icons.margin_top} wrapper={'span'} className={props.styles} />
    )
}

export const UploadIcon: any = (props: any) => {
    return (
        <Icon src={icons.upload} wrapper={'span'} className={props.styles} />
    )
}