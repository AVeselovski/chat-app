module ApplicationHelper
  def get_flash_type type
    case type
    when "danger"
      "Crap!"
    when "warning"
      "Umm..."
    else
      "Nice..."
    end
  end
end
