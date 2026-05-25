import './CallTextBtn.scss';

export default function CallTextBtns() {
    return (
       <div className="price-actions">
            <a href="sms:817-368-2755" className="price-btn price-btn-secondary">TEXT</a>
            <span className="price-action-separator">OR</span>
            <a href="tel:817-421-9200" className="price-btn price-btn-primary">CALL</a>
        </div>
    )
}