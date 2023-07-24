import { Icon, iconNames } from "./Icon";

export default {
    title: 'Atoms/Icons',
    component: Icon,
    parameters: {
        controls: { hideNoControlsWarning: true }, // 컨트롤 경고 메시지 숨김 설정
    }
}

export const All = () => (
    <div style={{ display: 'grid', gridTemplateColumns: '3rem 3rem 3rem 3rem', gridAutoRows: '3rem' }}>
        {iconNames.map((icon) => (
            <Icon icon={icon} key={icon}/>
        ))}
    </div>
)